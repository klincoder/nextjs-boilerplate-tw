// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";

// Component
function CustomHelperMsg({ title, visible, isError }) {
  // If empty args, return null
  if (!visible || !title) return null;

  // Debug
  //console.log("Debug customHelperMsg: ",)

  // Return component
  return (
    <>
      {/** If visible */}
      {visible && (
        <div
          className={`text-xs pt-1 ${isError ? "text-danger" : "text-gray"}`}
        >
          {title}
        </div>
      )}
    </>
  ); // close return
} // close component

// Export
export default CustomHelperMsg;
