// Import resources
import React from "react";

// Import custom files
import PageMeta from "./PageMeta";
import CmsHeader from "./CmsHeader";
import CmsFooter from "./CmsFooter";
import CmsSidebar from "./CmsSidebar";

// Component
function CmsContent({ title, children }) {
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
      {/* <CmsSidebar /> */}

      {/** Page body */}
      <>{children}</>

      {/** Footer */}
      <div className="sticky top-full">
        <CmsFooter />
      </div>
    </div>
  ); // close return
} // close component

// Export
export default CmsContent;
