// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomHelperMsg from "./CustomHelperMsg";

// Component
function CustomCheckbox({
  label,
  name,
  type,
  divClass,
  inputClass,
  helperMsg,
  errName,
  errTouched,
  ...rest
}) {
  // Debug
  //console.log("Debug customCheckbox: ",)

  // Return component
  return (
    <div className={`mb-5 ${divClass}`}>
      {/** Label */}
      <label htmlFor={name} className="inline-flex items-center cursor-pointer">
        {/** Input */}
        <input
          {...rest}
          id={name}
          name={name}
          type="checkbox"
          className="border-0 rounded-lg text-primary ml-1 w-5 h-5"
        />
        {/** label span */}
        <span className="ml-2 text-sm font-semibold">{label}</span>
      </label>

      {/** Helper msg */}
      {helperMsg && <CustomHelperMsg visible={helperMsg} title={helperMsg} />}

      {/** Error msg */}
      <CustomHelperMsg isError title={errName} visible={errTouched} />
    </div>
  ); // close return
} // close component

// Export
export default CustomCheckbox;
