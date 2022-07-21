// Import resources
import React, { useState } from "react";
import { useFormikContext } from "formik";
import { useAlert } from "react-alert";

// Import custom files
import CustomButton from "./CustomButton";
import CustomSpinner from "./CustomSpinner";
import CustomTextInputForm from "./CustomTextInputForm";
import CustomPasswordForm from "./CustomPasswordForm";
import useAppSettings from "../hooks/useAppSettings";
import { alertMsg, apiRoutes } from "../config/data";
import { handleIsEmptyForm, handleUserEmail } from "../config/functions";

// Component
function FormPasswordRecoveryDetails({
  otpCode,
  showNewPass,
  setOtpCode,
  setFormVal,
  setShowOtpInput,
}) {
  // Define formik context
  const { values, isSubmitting, isValid, handleSubmit } = useFormikContext();

  // Define alert
  const alert = useAlert();

  // Define logged in user
  const { handleEmailExist } = useAppSettings();

  // Define final values
  const finalEmail = values.emailAddr?.trim()?.toLowerCase();

  // Define isEmptyForm
  const propsToRemove = ["verifyCodeInput", "isOtpInput"];
  const isEmptyForm = handleIsEmptyForm(values, propsToRemove);

  // Define state
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // Debug
  //console.log("Debug formPassRecDetails: ", showNewPass);

  // FUNCTIONS
  // HANDLE SEND OTP EMAIL
  const handleSendOtpEmail = async () => {
    // Show loading
    setLoading(true);
    // Define variables
    const finalEmail = values.emailAddr?.trim()?.toLowerCase();
    const emailExist = handleEmailExist(finalEmail);
    const userInfo = emailExist?.data;
    // Debug
    //console.log("Debug handleSendOtpEmail: ", { finalEmail, emailExist });
    // If isEmptyForm
    if (finalEmail === "") {
      // Alert err
      alert.error(alertMsg?.isRequiredAll);
      setLoading(false);
      return;
    } else if (!emailExist?.isValid) {
      // Alert err
      alert.error(alertMsg?.emailExistErr);
      setLoading(false);
      return;
    } else {
      // Set form val
      setFormVal();
      // Set otp code
      setOtpCode();
      // Send otp code
      await handleUserEmail(
        userInfo?.username,
        userInfo?.emailAddress,
        otpCode,
        apiRoutes?.otp
      );
      // Show alert info
      alert.info(alertMsg?.otpSendSucc);
      // Set show otp input
      setShowOtpInput();
      // Hide loading
      //setLoading(false);
    } // close if
  }; // close fxn

  // Return component
  return (
    <>
      {/** If showNewPass */}
      {showNewPass ? (
        <>
          {/** New password */}
          <CustomPasswordForm
            name="newPass"
            label="New Password"
            showPass={showPass}
            onShowPass={() => setShowPass(!showPass)}
          />

          {/** Repeat new password */}
          <CustomPasswordForm
            name="repeatNewPass"
            label="Password"
            showPass={showPass}
            onShowPass={() => setShowPass(!showPass)}
          />

          {/** Button - Submit form */}
          <CustomButton
            isNormal
            type="submit"
            onClick={handleSubmit}
            disabled={!isValid || isSubmitting}
          >
            Submit
            {isSubmitting && <CustomSpinner />}
          </CustomButton>
        </>
      ) : (
        <>
          {/** Email address */}
          <CustomTextInputForm
            type="email"
            name="emailAddr"
            label="Email Address"
            helperText="We'll send a verification code"
          />

          {/** Button - Validate & send otp code */}
          <CustomButton
            isNormal
            onClick={async () => await handleSendOtpEmail()}
            disabled={!isValid || !finalEmail || loading}
          >
            Continue
            {loading && <CustomSpinner />}
          </CustomButton>

          {/** OTHER LINKS */}
          {/** Login link */}
          <div className="text-center mt-3">
            <CustomButton isLink href="/login">
              <a className="text-base text-black underline">
                Have an account? Login
              </a>
            </CustomButton>
          </div>
        </>
      )}
    </>
  ); // close return
} // close component

// Export
export default FormPasswordRecoveryDetails;
