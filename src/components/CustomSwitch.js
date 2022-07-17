// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomHelperMsg from "./CustomHelperMsg";

// Component
function CustomSwitch({
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
  //console.log("Debug customSwitch: ",)

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
          <div
            key={item}
            className="form-check form-check-inline form-switch mb-2 mr-5"
          >
            {/** Input */}
            <input
              {...rest}
              id={item}
              value={item}
              role="switch"
              type="checkbox"
              className={`form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top cursor-pointer shadow-sm bg-gray-400 bg-no-repeat bg-contain checked:bg-primary checked:border-primary checked:disabled:bg-lightPrimary disabled:bg-gray-400 disabled:pointer-events-none disabled:opacity-60 focus:outline-none ${inputClass}`}
            ></input>
            {/** Label */}
            <label
              htmlFor={item}
              className="form-check-label inline-block text-gray-800 cursor-pointer text-sm pl-0.5"
            >
              {item}
            </label>
          </div>
        ))}

      {/** Helper msg */}
      {helperMsg && <CustomHelperMsg visible={helperMsg} title={helperMsg} />}

      {/** Error msg */}
      <CustomHelperMsg isError title={errName} visible={errTouched} />
    </div>
  ); // close return
} // close component

// Export
export default CustomSwitch;
