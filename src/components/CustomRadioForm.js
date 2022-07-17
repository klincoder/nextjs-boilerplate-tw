// Import resources
import React from "react";
import { useFormikContext } from "formik";

// Import custom files
import tw from "../styles/twStyles";
import CustomRadio from "./CustomRadio";

// Component
function CustomRadioForm({ name, data, ...rest }) {
  // Define formik context
  const {
    values,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
    handleChange,
  } = useFormikContext();

  // Debug
  //console.log("Debug customRadioForm: ", name, values[name]);

  // Return component
  return (
    <CustomRadio
      {...rest}
      data={data}
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
export default CustomRadioForm;
