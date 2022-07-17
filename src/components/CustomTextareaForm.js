// Import resources
import React from "react";
import { useFormikContext } from "formik";

// Import custom files
import tw from "../styles/twStyles";
import CustomTextarea from "./CustomTextarea";

// Component
function CustomTextareaForm({ name, ...rest }) {
  // Define formik context
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  // Debug
  //console.log("Debug customTextareaForm: ",)

  // Return component
  return (
    <CustomTextarea
      {...rest}
      name={name}
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
export default CustomTextareaForm;
