// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomHelperMsg from "./CustomHelperMsg";

// Component
function CustomRadio({
  label,
  name,
  data,
  isRow,
  divClass,
  inputClass,
  helperMsg,
  errName,
  errTouched,
  checkedVal,
  ...rest
}) {
  // Debug
  //console.log("Debug customRadio: ",)

  // Return component
  return (
    <div className={`mb-4 ${isRow && "flex"} ${divClass}`}>
      {/** Label */}
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold mb-1 mr-3">
          {label}
        </label>
      )}

      {/** Loop data */}
      {data?.length > 0 &&
        typeof data === "object" &&
        data?.map((item, index) => (
          <label
            key={item + index}
            htmlFor={item}
            className="inline-flex items-center cursor-pointer mb-2"
          >
            {/** Input */}
            <input
              {...rest}
              type="radio"
              id={item}
              value={item}
              checked={checkedVal === item}
              className={`border-0 rounded-lg text-primary ml-1 w-5 h-5 cursor-pointer ${inputClass}`}
            />
            {/** label span */}
            <span className="mx-2 text-xs font-semibold">{item}</span>
          </label>
        ))}

      {/** Helper msg */}
      {helperMsg && <CustomHelperMsg visible={helperMsg} title={helperMsg} />}

      {/** Error msg */}
      <CustomHelperMsg isError title={errName} visible={errTouched} />
    </div>
  ); // close return
} // close component

// Export
export default CustomRadio;
