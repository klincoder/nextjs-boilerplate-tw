// Import resources
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAlert } from "react-alert";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import useAppSettings from "../hooks/useAppSettings";
import CustomTextInputForm from "./CustomTextInputForm";
import CustomPasswordForm from "./CustomPasswordForm";
import { alertMsg, apiRoutes } from "../config/data";
import { handleGenEmptyArr, handleUserEmail } from "../config/functions";
import CustomSpinner from "./CustomSpinner";
import CustomSelectForm from "./CustomSelectForm";
import CustomTextareaForm from "./CustomTextareaForm";
import CustomCheckboxForm from "./CustomCheckboxForm";

// Component
function FormLogin({ csrfToken }) {
  // Define state
  const [showPass, setShowPass] = useState(false);

  // Define alert
  const alert = useAlert();

  // Define router
  const router = useRouter();
  const routeHasQuery = Object.keys(router.query)?.length > 0;

  // Define app settings
  const { todaysDate1, handleEmailExist, handleUsernameExist } =
    useAppSettings();

  // TEST DATA
  // CHECKBOX DATA
  const checkboxData = ["Email", "SMS"];
  const checkboxDataLen = checkboxData?.length;
  const checkboxInitialVal = handleGenEmptyArr(checkboxDataLen);

  // Debug
  //console.log("Debug formLogin: ", checkboxInitialVal);

  // FORM CONFIG
  // Define initial values
  const initialValues = {
    username: "",
    pass: "",
    select: "",
    textarea: "",
    checkbox: "",
  };

  // Validation
  const validate = Yup.object({
    username: Yup.string().required("Required").max(50, "Too long"),
    pass: Yup.string().required("Required").min(8, "Too short"),
    select: Yup.string().required("Required"),
    textarea: Yup.string().required("Required"),
    checkbox: Yup.array().min(1, "Select one or more"),
  });

  // Define submit function
  const onSubmit = (values, { setSubmitting }) => {
    // Define variables
    const finalUsername = values.username?.trim()?.toLowerCase();
    const finalPass = values.pass?.trim();

    // Define email exist
    const emailExist = handleEmailExist(finalUsername);
    const usernameExist = handleUsernameExist(finalUsername);

    // Define user info
    const userInfo = emailExist?.isValid
      ? emailExist?.data
      : usernameExist?.data;

    // TEST
    setTimeout(() => {
      // Alert succ
      alert.success(alertMsg?.loginSucc);
      // Set submitting
      setSubmitting(false);
    }, 5000);

    // // If !emailExist, return
    // if (!emailExist?.isValid && !usernameExist?.isValid) {
    //   // Alert err
    //   alert.error(alertMsg?.loginErr);
    //   return;
    // } else {
    //   // Get final callbackUrl
    //   const finalCallbackUrl = routeHasQuery
    //     ? router.query.callbackUrl
    //     : "/cms";

    //   // Verify and login user
    //   const res = await signIn("credentials", {
    //     redirect: false,
    //     email: finalUsername,
    //     password: finalPass,
    //     callbackUrl: `${finalCallbackUrl}`,
    //   });
    //   // If res err
    //   if (res?.error) {
    //     // Alert err
    //     alert.error(alertMsg?.loginErr);
    //     setSubmitting(false);
    //   } else {
    //     // Send emails
    //     // Login alert
    //     await handleUserEmail(
    //       userInfo?.username,
    //       userInfo?.emailAddress,
    //       todaysDate1,
    //       apiRoutes?.login
    //     );
    //     // Alert succ
    //     alert.success(alertMsg?.loginSucc);
    //     // Set submitting
    //     setSubmitting(false);
    //     // Push to url
    //     router.push(res?.url);
    //     // Debug
    //     //console.log("Debug formLogin: ", res);
    //   } // close if res error
    // } // close if emailExist
  }; // close submit fxn

  // Return component
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={onSubmit}
    >
      {({ values, errors, isValid, isSubmitting }) => (
        <Form autoComplete="off">
          {/** Debug */}
          {/* {console.log("Debug loginFormValues:", values.checkbox)} */}

          {/** Hidden csrfToken field */}
          <input type="hidden" name="csrfToken" defaultValue={csrfToken} />

          {/** Username */}
          <CustomTextInputForm label="Username or email" name="username" />

          {/** Pass */}
          <CustomPasswordForm
            label="Password"
            name="pass"
            showPass={showPass}
            onClickShowPass={() => setShowPass(!showPass)}
          />

          {/** SELECT */}
          <CustomSelectForm
            label="Courses"
            name="select"
            data={["React", "React Native"]}
          />

          {/** TEXTAREA */}
          <CustomTextareaForm label="Message" name="textarea" />

          {/** CHECKBOX */}
          <CustomCheckboxForm
            label="Features"
            name="checkbox"
            data={checkboxData}
          />

          {/** Button */}
          <div className="text-center mt-6">
            <CustomButton
              isNormal
              type="submit"
              className={`w-full ${tw?.btnPrimary}`}
              disabled={!isValid || isSubmitting}
            >
              Login
              {isSubmitting && <CustomSpinner />}
            </CustomButton>
          </div>

          {/** OTHER LINKS */}
          <div className="flex flex-wrap mt-6">
            {/** Forgot password */}
            <div className="w-1/2">
              <CustomButton isLink href="/password-recovery">
                <a className="text-blueGray-200">
                  <small>Forgot password?</small>
                </a>
              </CustomButton>
            </div>
            {/** Register */}
            <div className="w-1/2 text-right">
              <CustomButton isLink href="/register">
                <a className="text-blueGray-200">
                  <small>Create new account</small>
                </a>
              </CustomButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  ); // close return
} // close component

// Export
export default FormLogin;
