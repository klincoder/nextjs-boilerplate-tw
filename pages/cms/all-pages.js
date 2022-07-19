// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function AllPages() {
  // Debug
  //console.log("Debug allPages: ",)

  // Return component
  return (
    <CmsContent title="All Pages">
      {/** Section 1 */}
      <div>
        <h1 className="font-bold">All Pages</h1>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default AllPages;
