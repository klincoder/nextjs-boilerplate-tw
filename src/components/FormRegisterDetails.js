// Import resources
import React, { useState } from "react";
import { useFormikContext } from "formik";
import { useAlert } from "react-alert";

// Import custom files
import CustomSpinner from "./CustomSpinner";
import CustomTextInputForm from "./CustomTextInputForm";
import CustomButton from "./CustomButton";
import useAppSettings from "../hooks/useAppSettings";
import CustomPasswordForm from "./CustomPasswordForm";
import { alertMsg, apiRoutes } from "../config/data";
import { handleIsEmptyForm } from "../config/functions";

// Component
function FormRegisterDetails({
  setShowOtpInput,
  setOtpCode,
  otpCode,
  setFormVal,
}) {
  // Define formik context
  const { values, isSubmitting, isValid } = useFormikContext();

  // Define state
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // Define alert
  const alert = useAlert();

  // Define logged in user
  const { handleEmailExist, handleUsernameExist } = useAppSettings();

  // Define isEmptyForm
  const propsToRemove = ["verifyCodeInput", "phoneNum", "isOtpInput"];
  const isEmptyForm = handleIsEmptyForm(values, propsToRemove);

  // Debug
  //console.log("Debug formRegisterDetails: ",);

  // FUNCTIONS
  // HANDLE SEND OTP EMAIL
  const handleSendOtpEmail = async () => {
    // Set loading to true
    setLoading(true);
    // Define variables
    const finalEmail = values.emailAddr?.trim()?.toLowerCase();
    const finalUsername = values.username?.trim()?.toLowerCase();
    const emailExist = handleEmailExist(finalEmail);
    const usernameExist = handleUsernameExist(finalUsername);
    // If isEmptyForm
    if (isEmptyForm) {
      // Alert err
      alert.error("All fields are required");
      setLoading(false);
      return;
    } else if (emailExist?.isValid) {
      // Alert err
      alert.error("Email address already exist");
      setLoading(false);
      return;
    } else if (usernameExist?.isValid) {
      // Alert err
      alert.error("Username is not available");
      setLoading(false);
      return;
    } else {
      // Set form val
      setFormVal();
      // Set otp code
      setOtpCode();
      // Send otp code
      await handleUserEmail(finalUsername, finalEmail, otpCode, apiRoutes?.otp);
      // Show alert info
      alert.info(alertMsg?.otpSendSucc);
      // Set show otp input
      setShowOtpInput();
      //setLoading(false);
    } // close if
  }; // close fxn

  // Return component
  return (
    <>
      {/** First name */}
      <CustomTextInputForm name="fullName" label="Full Name" />

      {/** Username */}
      <CustomTextInputForm label="Username" name="username" />

      {/** Email address */}
      <CustomTextInputForm
        type="email"
        name="emailAddr"
        label="Email Address"
        helperText="We'll send a verification code"
      />

      {/** Phone number */}
      {/* <CustomTextInputForm name="phoneNum" label="Phone Number" /> */}

      {/** Password */}
      <div className="flex flex-col md:flex-row md:gap-2">
        <div className="w-full md:w-1/2">
          <CustomPasswordForm
            name="pass"
            label="Password"
            onClickShowPass={() => setShowPass(!showPass)}
          />
        </div>
        {/** Repeat Password */}
        <div className="w-full md:w-1/2">
          <CustomPasswordForm
            name="repeatPass"
            label="Repeat Password"
            onClickShowPass={() => setShowPass(!showPass)}
          />
        </div>
      </div>

      {/** Button - Validate & send otp code */}
      <CustomButton
        isNormal
        type="submit"
        className={`w-full mt-3`}
        onClick={() => handleSendOtpEmail()}
        disabled={!isValid || isSubmitting || loading}
      >
        Create Account
        {loading && <CustomSpinner />}
      </CustomButton>

      {/** Accept terms */}
      <div className="text-xs text-center text-gray-500 my-2">
        By creating an account, you accept our{" "}
        <CustomButton isLink href="/terms">
          <a className="text-gray underline" target="_blank" rel="noreferrer">
            terms
          </a>
        </CustomButton>
      </div>

      {/** Login link */}
      <div className="text-center mt-1">
        <CustomButton isLink href="/login">
          <a className="text-sm text-black underline">Have an account? Login</a>
        </CustomButton>
      </div>
    </>
  ); // close return
} // close component

// Export
export default FormRegisterDetails;
