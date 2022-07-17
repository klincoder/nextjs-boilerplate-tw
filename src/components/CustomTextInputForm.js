// Import resources
import React from "react";
import { useFormikContext } from "formik";

// Import custom files
import tw from "../styles/twStyles";
import CustomTextInput from "./CustomTextInput";

// Component
function CustomTextInputForm({ name, type, ...rest }) {
  // Define formik context
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  // Debug
  //console.log("Debug customTextInputForm: ", touched);

  // Return component
  return (
    <CustomTextInput
      {...rest}
      type={type}
      value={values[name]}
      errName={errors[name]}
      errTouched={touched[name]}
      onBlur={() => setFieldTouched(name)}
      onChange={(e) => setFieldValue(name, e.target.value)}
      inputClass={touched[name] && errors[name] && "border-danger"}
    />
  ); // close return
} // close component

// Export
export default CustomTextInputForm;
