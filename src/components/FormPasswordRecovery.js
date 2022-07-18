// Import resources
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import bcryptjs from "bcryptjs";
import moment from "moment";
import { useSetRecoilState } from "recoil";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";

// Import custom files
import CustomSpinner from "./CustomSpinner";
import FormPasswordRecoveryDetails from "./FormPasswordRecoveryDetails";
import useAppSettings from "../hooks/useAppSettings";
import CustomOtpInputForm from "./CustomOtpInputForm";
import { userAtom } from "../recoil/atoms";
import { handleGenOtpCode, handleUserEmail } from "../config/functions";
import { fireDB, doc, setDoc } from "../config/firebase";
import { alertMsg, apiRoutes, otpDefaultTimer } from "../config/data";

// Component
function FormPasswordRecovery() {
  // Define state
  const [otpCode, setOtpCode] = useState(null);
  const [formVal, setFormVal] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpTimer, setOtpTimer] = useState(otpDefaultTimer);
  const [showNewPass, setShowNewPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // Define user
  const { todaysDate, todaysDate1, handleEmailExist } = useAppSettings();

  // Generate otp code
  const genOtpCode = handleGenOtpCode();

  // Define alert
  const alert = useAlert();

  // Define router
  const router = useRouter();

  // Define atom
  const setUserAtom = useSetRecoilState(userAtom);

  // Debug
  //console.log("Debug formPassRecovery: ", showNewPass);

  // FUNCTIONS
  // HANDLE VERIFY OTP INPUT
  const handleVerifyOtpInput = async (codeVal) => {
    // If empty args, return null
    if (!codeVal) return null;
    // Show loading
    setLoading(true);
    // Hash otp code
    const hashOtpCode = bcryptjs.hashSync(otpCode, 5);
    // Compare verify code
    const compareVerifyCode = bcryptjs.compareSync(codeVal, hashOtpCode);
    // If compare verify code
    if (compareVerifyCode) {
      // Set showNewPass to true
      setShowNewPass(true);
      // Set showOtpInput
      setShowOtpInput(false);
      // Hide loading
      setLoading(false);
    } else {
      // Alert err
      alert.showAlert(alertMsg?.otpErr);
      setLoading(false);
    } // close if compareVerifyCode
    // Debug
    // console.log("Debug handleVerifyOtp 2: ", {
    //   codeVal,
    //   hashOtpCode,
    //   compareVerifyCode,
    //   otpCode,
    // });
    // spinner.hideLoading();
  }; // close fxn

  // HANDLE RESEND OTP
  const handleResendOtp = async (email) => {
    // If empty args, return null
    if (!email) return null;
    // Show loading
    setLoading(true);
    // Define user info
    const emailExist = handleEmailExist(email);
    const userInfo = emailExist?.data;
    // Set otp code
    setOtpCode(genOtpCode);
    // Send otp code to user
    await handleUserEmail(
      userInfo?.username,
      userInfo?.emailAddress,
      genOtpCode,
      apiRoutes?.otp
    );
    // Set otp timer to default
    setOtpTimer(otpDefaultTimer);
    // Alert succ
    alert.success(alertMsg?.otpSent);
    // Hide loading
    setLoading(false);
  }; // close fxn

  // FORM CONFIG
  // Initial values
  const initialValues = {
    emailAddr: formVal ? formVal?.emailAddr : "",
    newPass: formVal ? formVal?.newPass : "",
    repeatNewPass: formVal ? formVal?.repeatNewPass : "",
    verifyCodeInput: "",
    isOtpInput: showOtpInput,
    isNewPass: showNewPass,
  };

  // Validation
  const validate = Yup.object().shape({
    isOtpInput: Yup.boolean(),
    isNewPass: Yup.boolean(),
    emailAddr: Yup.string().required("Required").email("Invalid email address"),
    newPass: Yup.string().when("isNewPass", {
      is: true,
      then: Yup.string().required("Required").min(8, "Too short"),
    }),
    repeatNewPass: Yup.string().when("isNewPass", {
      is: true,
      then: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("newPass"), null], "Password must match"),
    }),
  });

  // Submit form
  const onSubmit = async (values, { setSubmitting }) => {
    // Debug
    // console.log("Debug submitPassRecovery: ", values);
    // setSubmitting(false);

    // Define variables
    const finalEmail = values.emailAddr?.trim()?.toLowerCase();
    const finalNewPass = values.newPass?.trim();

    // Define user info
    const emailExist = handleEmailExist(finalEmail);
    const userInfo = emailExist?.data;

    // Hash new password
    const hashNewPass = bcryptjs.hashSync(finalNewPass, 5);

    // Update user pass
    const updateUserRef = doc(fireDB, "users", `${userInfo?.userID}`);
    // Await
    await setDoc(
      updateUserRef,
      {
        password: hashNewPass,
        dateUpdated: todaysDate,
      },
      { merge: true }
    )
      .then(async () => {
        // Send emails
        // Password change email to user
        await handleUserEmail(
          userInfo?.username,
          userInfo?.emailAddress,
          todaysDate1,
          apiRoutes?.passChange
        );

        // Alert succ
        alert.success(alertMsg?.passRecoverySucc);
        // Set submitting
        setSubmitting(false);
        // Set atom
        setUserAtom(userInfo);
      })
      .catch((err) => {
        // Alert err
        alert.error(err.message);
        setSubmitting(false);
      });
  }; // close submit form

  // SIDE EFFECTS
  // RESEND TIMER
  useEffect(() => {
    // If empty args, return
    if (showOtpInput !== true) return;
    // Get timer
    const timer =
      otpTimer > 0 && setInterval(() => setOtpTimer(otpTimer - 1), 1000);
    // Debug
    //console.log("Debug timerInterval: ", otpTimer);
    // Clean up
    return () => clearInterval(timer);
  }, [otpTimer, showOtpInput]);

  // Return component
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validate}
      enableReinitialize
    >
      {({ values, errors, isSubmitting, setFieldValue }) => (
        <Form autoComplete="off">
          {/** Debug */}
          {/* {console.log("Form formPassRecValues: ", values.isNewPass)} */}

          {/** If showOtpInput */}
          {showOtpInput ? (
            <>
              {/** Otp input */}
              <CustomOtpInputForm
                name="verifyCodeInput"
                onSubmitCode={async () => {
                  // Await verify otp input
                  const codeVal = values.verifyCodeInput?.trim();
                  await handleVerifyOtpInput(codeVal);
                }}
              />

              {/** Resend otp timer */}
              <div className="items-center justify-between mt-6">
                {/** If otpTimer > 0 */}
                {otpTimer > 0 ? (
                  <p className="text-center text-lg text-primary">
                    Resend code in {otpTimer}s
                  </p>
                ) : (
                  // Resend code
                  <div
                    className="text-lg text-primary underline"
                    onClick={async () => {
                      // Await resend otp code
                      const finalEmail = values.emailAddr
                        ?.trim()
                        ?.toLowerCase();
                      await handleResendOtp(finalEmail);
                    }}
                  >
                    Resend OTP
                    {loading && <CustomSpinner />}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/** Form details */}
              <FormPasswordRecoveryDetails
                otpCode={genOtpCode}
                showNewPass={showNewPass}
                setOtpCode={() => setOtpCode(genOtpCode)}
                setShowOtpInput={() => setShowOtpInput(true)}
                setFormVal={() => setFormVal(values)}
              />
            </>
          )}
        </Form>
      )}
    </Formik>
  ); // close return
} // close component

// Export
export default FormPasswordRecovery;
