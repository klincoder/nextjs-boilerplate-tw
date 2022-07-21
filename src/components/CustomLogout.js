// Import resources
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";

// Component
function CustomLogout({ onShowModal, ...rest }) {
  // Debug
  //console.log("Debug customLogout: ",)

  // Return component
  return (
    <>
      {/** Button */}
      <CustomButton
        isModal
        modalID="logoutModal"
        className="flex items-center gap-2 px-3 py-1 text-sm text-danger"
        {...rest}
      >
        <FaSignOutAlt /> Logout
      </CustomButton>
    </>
  ); // close return
} // close component

// Export
export default CustomLogout;
