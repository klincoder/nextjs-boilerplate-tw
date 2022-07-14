// Import resources
import React from "react";
import Link from "next/link";

// Import custom files
import tw from "../styles/twStyles";

// Component
function CustomButton({
  type,
  onClick,
  isNormal,
  isLink,
  href,
  children,
  ...rest
}) {
  // Debug
  //console.log("Debug customButton: ",)

  // Return component
  return (
    <>
      {/** IsNormal */}
      {isNormal && (
        <button type={type || "button"} onClick={onClick} {...rest}>
          {children}
        </button>
      )}

      {/** IsLink */}
      {isLink && (
        <Link href={href || "/"} {...rest}>
          {children}
        </Link>
      )}
    </>
  ); // close return
} // close component

// Export
export default CustomButton;
