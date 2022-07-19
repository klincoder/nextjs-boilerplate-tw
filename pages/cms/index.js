// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function Cms() {
  // Debug
  //console.log("Debug cms: ",)

  // Return component
  return (
    <CmsContent title="Dashboard">
      {/** Section 1 */}
      <div>
        <h1 className="font-bols">CMS Dashboard</h1>
      </div>
    </CmsContent>
  ); // close return
} // close component

export default Cms;
