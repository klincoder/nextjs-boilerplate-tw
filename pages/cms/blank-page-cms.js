// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function BlankPageCms() {
  // Debug
  //console.log("Debug blankPageCms: ",)

  // Return component
  return (
    <CmsContent title="BlankPageCms">
      {/** Section 1 */}
      <div>
        <h1 className="font-bold">BlankPageCms</h1>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default BlankPageCms;
