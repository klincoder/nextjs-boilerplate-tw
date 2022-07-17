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
    <div className={`mb-4 xl:w-96 ${divClass}`}>
      {/** Label */}
      {label && (
        <label
          htmlFor={name}
          className="form-label inline-block text-sm font-semibold mb-1"
        >
          {label}
        </label>
      )}

      {/** Input */}
      <input
        {...rest}
        name={name}
        type={"text" || type}
        placeholder={label || placeholder}
        className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none ${inputClass}`}
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
