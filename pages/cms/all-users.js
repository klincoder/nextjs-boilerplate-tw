// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function AllUsers() {
  // Debug
  //console.log("Debug AllUsers: ",)

  // Return component
  return (
    <CmsContent title="All Users">
      {/** Section 1 */}
      <div>
        <h1 className="font-bold">All Users</h1>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default AllUsers;
