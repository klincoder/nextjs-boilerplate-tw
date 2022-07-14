// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomHelperMsg from "./CustomHelperMsg";

// Component
function CustomTextInput({
  label,
  name,
  type,
  divClass,
  inputClass,
  helperMsg,
  errName,
  errTouched,
  placeholder,
  ...rest
}) {
  // Debug
  //console.log("Debug customTextInput: ",)

  // Return component
  return (
    <div className={`w-full mb-5 ${divClass}`}>
      {/** Label */}
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold mb-1">
          {label}
        </label>
      )}

      {/** Input */}
      <input
        {...rest}
        type={"text" || type}
        name={name}
        placeholder={label || placeholder}
        className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:border-secondary focus:border-b w-full ${inputClass}`}
      />

      {/** Helper msg */}
      {helperMsg && <CustomHelperMsg visible={helperMsg} title={helperMsg} />}

      {/** Error msg */}
      <CustomHelperMsg isError title={errName} visible={errTouched} />
    </div>
  ); // close return
} // close component

// Export
export default CustomTextInput;
