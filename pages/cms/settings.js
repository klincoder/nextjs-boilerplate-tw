// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function Settings() {
  // Debug
  //console.log("Debug settings: ",)

  // Return component
  return (
    <CmsContent title="Settings">
      {/** Section 1 */}
      <div>
        <h1 className="font-bold">Settings</h1>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default Settings;
