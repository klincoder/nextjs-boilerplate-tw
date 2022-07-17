// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomHelperMsg from "./CustomHelperMsg";

// Component
function CustomSelect({
  label,
  name,
  data,
  isKeyValue,
  divClass,
  inputClass,
  helperMsg,
  errName,
  errTouched,
  optionLabel,
  ...rest
}) {
  // Debug
  //console.log("Debug customSelect: ",)

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
      <select
        {...rest}
        id={name}
        name={name}
        className={`form-select form-select-lg appearance-none block w-full px-4 py-2 m-0 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none ${inputClass}`}
      >
        {/** Empty option */}
        <option value="">{optionLabel || `Choose option`}</option>
        {/** Loop data */}
        {data?.length > 0 &&
          typeof data === "object" &&
          data?.map((item, index) => {
            // If isKeyValue
            if (isKeyValue) {
              return (
                <option key={item?.key + index} value={item?.value}>
                  {item?.key}
                </option>
              ); // close return
            } else {
              return (
                <option key={item + index} value={item}>
                  {item}
                </option>
              ); // close return
            } // close if
          })}
      </select>

      {/** Helper msg */}
      {helperMsg && <CustomHelperMsg visible={helperMsg} title={helperMsg} />}

      {/** Error msg */}
      <CustomHelperMsg isError title={errName} visible={errTouched} />
    </div>
  ); // close return
} // close component

// Export
export default CustomSelect;
