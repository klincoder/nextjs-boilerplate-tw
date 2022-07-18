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
import CustomSpinner from "./CustomSpinner";
import { alertMsg, apiRoutes } from "../config/data";
import { handleGenEmptyArr, handleUserEmail } from "../config/functions";

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
  const checkboxData = ["Email", "SMS"];
  const genderData = ["Male", "Female"];
  const switchData = ["Manage Users", "Manage Pages"];

  // Debug
  //console.log("Debug formLogin: ", checkboxInitialVal);

  // FORM CONFIG
  // Define initial values
  const initialValues = {
    username: "",
    pass: "",
    // select: "",
    // textarea: "",
    // checkbox: "",
    // radio: "",
    // switch: "",
  };

  // Validation
  const validate = Yup.object({
    username: Yup.string().required("Required").max(50, "Too long"),
    pass: Yup.string().required("Required").min(8, "Too short"),
    // select: Yup.string().required("Required"),
    // textarea: Yup.string().required("Required"),
    // checkbox: Yup.array().min(1, "Select one or more"),
    // radio: Yup.string().required("Required"),
    // switch: Yup.array().min(1, "Select one or more"),
  });

  // FUNCTIONS
  // HANDLE SUBMIT FORM
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
          {/* {console.log("Debug loginFormValues:", values.switch, errors.switch)} */}

          {/** Hidden csrfToken field */}
          <input type="hidden" name="csrfToken" defaultValue={csrfToken} />

          {/** Username */}
          <CustomTextInputForm name="username" label="Username or email" />

          {/** Pass */}
          <CustomPasswordForm
            name="pass"
            label="Password"
            showPass={showPass}
            onClickShowPass={() => setShowPass(!showPass)}
          />

          {/** Button */}
          <div className="text-center">
            <CustomButton
              isNormal
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              Login
              {isSubmitting && <CustomSpinner />}
            </CustomButton>
          </div>

          {/** OTHER LINKS */}
          <div className="flex flex-wrap mt-3">
            {/** Forgot password */}
            <div className="w-1/2">
              <CustomButton isLink href="/password-recovery">
                <a className="text-sm text-black underline">Forgot password?</a>
              </CustomButton>
            </div>
            {/** Register */}
            <div className="w-1/2 text-right">
              <CustomButton isLink href="/register">
                <a className="text-sm text-black underline">
                  Create new account
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
