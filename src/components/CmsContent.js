// Import resources
import React, { useState } from "react";

// Import custom files
import PageMeta from "./PageMeta";
import CmsHeader from "./CmsHeader";
import CmsFooter from "./CmsFooter";
import CmsSidebar from "./CmsSidebar";
import CustomModal from "./CustomModal";
import useAppSettings from "../hooks/useAppSettings";

// Component
function CmsContent({ title, children }) {
  // Define app settings
  const { siteInfo, handleLogout } = useAppSettings();

  // Debug
  //console.log("Debug cmsContent: ",)

  // Return component
  return (
    <div className="min-h-screen">
      {/** Page meta */}
      <PageMeta title={title} />

      {/** Header */}
      <CmsHeader />

      {/** Sidebar */}
      <CmsSidebar />

      {/** Page body */}
      <div className="min-h-screen bg-gray-50 md:pl-60">
        {/** Header */}
        {/* <CmsHeader /> */}
        {/** Children */}
        <div className="p-6">{children}</div>
        {/** Footer */}
        <div className="sticky top-full">
          <CmsFooter />
        </div>
      </div>

      {/** MODALS */}
      {/** Logout modal */}
      <CustomModal
        showConfirm
        title="Confirm Logout"
        modalID="logoutModal"
        onConfirm={async () => {
          // Logout
          await handleLogout();
        }}
      >
        <p>Are you sure you want to logout?</p>
      </CustomModal>
    </div>
  ); // close return
} // close component

// Export
export default CmsContent;
