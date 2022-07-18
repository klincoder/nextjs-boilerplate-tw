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
  isSecondary,
  href,
  children,
  btnClass,
  ...rest
}) {
  // Debug
  //console.log("Debug customButton: ",)

  // Return component
  return (
    <>
      {/** IsNormal */}
      {isNormal && (
        <button
          {...rest}
          type={type || "button"}
          onClick={onClick}
          className={
            btnClass ||
            `w-full mt-3 ${isSecondary ? tw?.btnSecondary : tw?.btnPrimary}`
          }
        >
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
