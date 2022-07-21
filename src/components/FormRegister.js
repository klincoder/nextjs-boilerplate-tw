// Import resources
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAlert } from "react-alert";
import bcryptjs from "bcryptjs";
import { useRouter } from "next/router";

// Import custom files
import CustomOtpInputForm from "./CustomOtpInputForm";
import FormRegisterDetails from "./FormRegisterDetails";
import CustomButton from "./CustomButton";
import useAppSettings from "../hooks/useAppSettings";
import CustomSpinner from "./CustomSpinner";
import ResendOtp from "./ResendOtp";
import { appRegex, apiRoutes, alertMsg, otpDefaultTimer } from "../config/data";
import {
  handleGenOtpCode,
  handleTitleCase,
  handleUserEmail,
  handleAdminEmail,
} from "../config/functions";
import {
  createUserWithEmailAndPassword,
  fireAuth,
  fireDB,
  setDoc,
  doc,
} from "../config/firebase";

// Component
function FormRegister() {
  // Define state
  const [otpCode, setOtpCode] = useState(null);
  const [formVal, setFormVal] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpTimer, setOtpTimer] = useState(otpDefaultTimer);
  const [loading, setLoading] = useState(false);

  // Generate otp code
  const genOtpCode = handleGenOtpCode();

  // Define alert
  const alert = useAlert();

  // Define router
  const router = useRouter();

  // Define app settings
  const { todaysDate, todaysDate1, handleEmailExist } = useAppSettings();

  // Debug
  //console.log("Debug formRegister: ",)

  // FORM CONFIG
  // Define initial values
  const initialValues = {
    fullName: formVal ? formVal?.fullName : "",
    username: formVal ? formVal?.username : "",
    emailAddr: formVal ? formVal?.emailAddr : "",
    //phoneNum: formVal ? formVal?.phoneNum : "",
    pass: formVal ? formVal?.pass : "",
    repeatPass: formVal ? formVal?.repeatPass : "",
    verifyCodeInput: "",
    isOtpInput: showOtpInput,
  };

  // Define validations
  const validate = Yup.object().shape({
    isOtpInput: Yup.boolean(),
    fullName: Yup.string().required("Required").min(3, "Too short"),
    username: Yup.string()
      .required("Required")
      .min(6, "Too short")
      .max(20, "Too long"),
    emailAddr: Yup.string().required("Required").email("Invalid email address"),
    // phoneNum: Yup.string()
    //   .required("Required")
    //   .matches(appRegex?.digitsOnly, "Invalid number")
    //   .min(10, "Too short"),
    pass: Yup.string().required("Required").min(8, "Too short"),
    repeatPass: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("pass"), null], "Password must match"),
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
    const rUsername = formVal?.username;
    const rEmailAddr = formVal?.emailAddr;
    // If empty args, return null
    if (!rUsername || !rEmailAddr) return null;
    // Show loading
    setLoading(true);
    // Set otp code
    setOtpCode(genOtpCode);
    // Send otp code to user
    await handleUserEmail(rUsername, rEmailAddr, genOtpCode, apiRoutes?.otp);
    // Set otp timer to default
    setOtpTimer(otpDefaultTimer);
    // Alert succ
    alert.success(alertMsg?.otpSendSucc);
    // Hide loading
    setLoading(false);
  }; // close fxn

  // HANDLE SBUMIT FORM
  const onSubmit = async (values, { setSubmitting }) => {
    // Define variables
    const finalFullName = handleTitleCase(values.fullName?.trim());
    const finalUsername = values.username?.trim()?.toLowerCase();
    const finalEmail = values.emailAddr?.trim()?.toLowerCase();
    const finalPass = values.pass?.trim();
    const finalPhoneNum = values.phoneNum?.trim() || "";
    const finalVerifyCodeInput = values.verifyCodeInput?.trim();

    // If !finalVerifyCodeInput return
    if (!finalVerifyCodeInput) return;

    // Hash otp code
    const hashOtpCode = bcryptjs.hashSync(otpCode, 5);
    // Hash password
    const hashPass = bcryptjs.hashSync(finalPass, 5);
    // Compare verify code
    const compareVerifyCode = bcryptjs.compareSync(
      finalVerifyCodeInput,
      hashOtpCode
    );

    // If compare verify code
    if (compareVerifyCode) {
      // Create user with firebase auth
      await createUserWithEmailAndPassword(fireAuth, finalEmail, finalPass)
        .then(async () => {
          // Define current user id
          const currentUserID = fireAuth.currentUser.uid;
          // Add user to database
          await setDoc(doc(fireDB, "users", currentUserID), {
            regMethod: "website",
            userID: currentUserID,
            role: "user",
            avatar: "",
            fullName: finalFullName,
            username: finalUsername,
            emailAddress: finalEmail,
            phoneNumber: finalPhoneNum,
            password: hashPass,
            emailVerified: true,
            acctStatus: "active",
            pushNotifications: true,
            dateCreated: todaysDate,
            dateUpdated: todaysDate,
          });

          // Send emails
          // Define emailMsg
          const emailMsg = {
            username: finalUsername,
            email: finalEmail,
            date: todaysDate1,
          };
          // Welcome email to user
          await handleUserEmail(
            finalUsername,
            finalEmail,
            emailMsg,
            apiRoutes?.welcome
          );
          // New user email to admin
          await handleAdminEmail(emailMsg, apiRoutes?.newUser);
          // Alert succ
          alert.success(alertMsg?.registerSucc);
          // Set submitting
          setSubmitting(false);
          // Push to login page
          router.push("/login");
        })
        .catch((err) => {
          // Alert err
          alert.error(err.message);
          setSubmitting(false);
          //console.log("Error formRegister: ", err.message);
        });
    } else {
      // Alert error
      alert.error(alertMsg?.otpVerifyErr);
      setSubmitting(false);
    } // close if
  }; // close submit fxn

  // Return component
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, errors, resetForm, handleSubmit }) => (
        <Form autoComplete="off">
          {/** Debug */}
          {/* {console.log("Debug formRegisterVal: ", values)} */}

          {/** If showOtpInput */}
          {showOtpInput ? (
            <>
              {/** Otp input */}
              <CustomOtpInputForm
                type="submit"
                name="verifyCodeInput"
                isLoading={loading}
                onSubmitCode={handleSubmit}
              />

              {/** Resend otp */}
              <ResendOtp
                otpTimer={otpTimer}
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
              {/** Form */}
              <FormRegisterDetails
                otpCode={genOtpCode}
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
export default FormRegister;
