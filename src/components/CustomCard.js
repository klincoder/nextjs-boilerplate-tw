// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomImage from "./CustomImage";

// Component
function CustomCard({
  title,
  isNormal,
  isImage,
  divClass,
  titleClass,
  children,
  ...rest
}) {
  // Debug
  //console.log("Debug customCard: ",)

  // Return component
  return (
    <>
      {/** IS NORMAL */}
      <div
        className={`block p-6 rounded-lg shadow-lg bg-white max-w-sm ${divClass}`}
      >
        {/** Card title */}
        {title && (
          <h5
            className={`text-gray-900 text-xl font-medium mb-2 ${titleClass}`}
          >
            {title}
          </h5>
        )}
        {/** Card body */}
        {children}
      </div>

      {/** IS IMAGE */}
      {isImage && (
        <div className={`rounded-lg shadow-lg bg-white max-w-sm ${divClass}`}>
          {/** Card image */}
          <CustomImage image={image} {...rest} />
          {/** Card body */}
          <div class="p-6">
            {/** Card title */}
            {title && (
              <h5
                className={`text-gray-900 text-xl font-medium mb-2 ${titleClass}`}
              >
                {title}
              </h5>
            )}
            {/** Card body */}
            {children}
          </div>
        </div>
      )}
    </>
  ); // close return
} // close component

// Export
export default CustomCard;
