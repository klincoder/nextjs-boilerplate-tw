// Import resources
import React from "react";
import { useFormikContext } from "formik";

// Import custom files
import tw from "../styles/twStyles";
import CustomOtpInput from "./CustomOtpInput";
import CustomButton from "./CustomButton";
import CustomSpinner from "./CustomSpinner";

// Component
function CustomOtpInputForm({ name, type, onSubmitCode, ...rest }) {
  // Define formik context
  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext();

  // Debug
  //console.log("Debug customOtpInputForm: ", touched);

  // Return component
  return (
    <>
      {/** Verify code input */}
      <CustomOtpInput
        {...rest}
        value={values[name]}
        errName={errors[name]}
        errTouched={touched[name]}
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        inputClass={touched[name] && errors[name] && "border-danger"}
      />

      {/** */}
      <CustomButton
        isNormal
        type="submit"
        className="w-full mt-3"
        onClick={onSubmitCode}
        disabled={!isValid || isSubmitting}
      >
        Submit
        {isSubmitting && <CustomSpinner />}
      </CustomButton>
    </>
  ); // close return
} // close component

// Export
export default CustomOtpInputForm;
