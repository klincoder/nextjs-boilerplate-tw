// Import resources
import React from "react";
import { useFormikContext } from "formik";

// Import custom files
import tw from "../styles/twStyles";
import CustomPassword from "./CustomPassword";

// Component
function CustomPasswordForm({ name, ...rest }) {
  // Define formik context
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  // Debug
  //console.log("Debug customPasswordForm: ",)

  // Return component
  return (
    <CustomPassword
      {...rest}
      value={values[name]}
      errName={errors[name]}
      errTouched={touched[name]}
      onBlur={() => setFieldTouched(name)}
      //showPass
      //onClickShowPass
      onChange={(e) => setFieldValue(name, e.target.value)}
      inputClass={touched[name] && errors[name] && "border-danger"}
    />
  ); // close return
} // close component

// Export
export default CustomPasswordForm;
