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
import ResendOtp from "./ResendOtp";
import { otpTimerAtom } from "../recoil/atoms";
import { handleGenOtpCode, handleUserEmail } from "../config/functions";
import { fireDB, doc, setDoc } from "../config/firebase";
import { alertMsg, apiRoutes, otpDefaultTimer, appRegex } from "../config/data";

// Component
function FormPasswordRecovery() {
  // Define state
  const [otpCode, setOtpCode] = useState(null);
  const [formVal, setFormVal] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // Define atom
  const setOtpTimerAtom = useSetRecoilState(otpTimerAtom);

  // Define user
  const { todaysDate, todaysDate1, handleEmailExist } = useAppSettings();

  // Generate otp code
  const genOtpCode = handleGenOtpCode();

  // Define alert
  const alert = useAlert();

  // Define router
  const router = useRouter();

  // Debug
  //console.log("Debug formPassRecovery: ", showNewPass);

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
    verifyCodeInput: Yup.string().when("isOtpInput", {
      is: true,
      then: Yup.string()
        .required("Required")
        .matches(appRegex?.digitsOnly, "Invalid number")
        .min(6, "Too short")
        .max(6, "Too long"),
    }),
  });

  // FUNCTIONS
  // HANDLE RESEND OTP
  const handleResendOtp = async () => {
    // Define variables
    const rEmailAddr = formVal?.emailAddr;
    // If empty args, return null
    if (!rEmailAddr) return null;
    // Show loading
    setLoading(true);
    // Define user info
    const emailExist = handleEmailExist(rEmailAddr);
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
    setOtpTimerAtom(otpDefaultTimer);
    // Alert succ
    alert.success(alertMsg?.otpSendSucc);
    // Hide loading
    setLoading(false);
  }; // close fxn

  // HANDLE VERIFY OTP INPUT
  const handleVerifyOtpInput = (codeVal) => {
    // If empty args, return null
    if (!codeVal) return null;
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
    } else {
      // Alert err
      alert.error(alertMsg?.otpVerifyErr);
    } // close if compareVerifyCode
  }; // close fxn

  // HANDLE SUBMIT FORM
  const onSubmit = async (values, { setSubmitting }) => {
    // If empty args, return null
    if (!showNewPass) return null;

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
        // Push to login page
        router.push("/login");
      })
      .catch((err) => {
        // Alert err
        alert.error(err.message);
        setSubmitting(false);
      });
  }; // close submit form

  // Return component
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validate}
      enableReinitialize
    >
      {({ values, errors, resetForm }) => (
        <Form autoComplete="off">
          {/** Debug */}
          {/* {console.log("Form formPassRecValues: ", values.isNewPass)} */}

          {/** If showOtpInput */}
          {showOtpInput ? (
            <>
              {/** Otp input */}
              <CustomOtpInputForm
                name="verifyCodeInput"
                isLoading={loading}
                onSubmitCode={async () => {
                  // Await verify otp input
                  const codeVal = values.verifyCodeInput?.trim();
                  handleVerifyOtpInput(codeVal);
                }}
              />

              {/** Resend otp */}
              <ResendOtp
                onResendOtp={async () => await handleResendOtp()}
                onCancel={() => {
                  // Reset form
                  resetForm();
                  setFormVal(null);
                  setShowOtpInput(false);
                  setOtpTimer(otpDefaultTimer);
                }}
              />
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
