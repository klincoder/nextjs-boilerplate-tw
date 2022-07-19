// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function BlankPageCmsAdmin() {
  // Debug
  //console.log("Debug blankPageCmsAdmin: ",)

  // Return component
  return (
    <CmsContent title="BlankPageCmsAdmin">
      {/** Section 1 */}
      <div>
        <h1 className="font-bold">BlankPageCmsAdmin</h1>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default BlankPageCmsAdmin;
