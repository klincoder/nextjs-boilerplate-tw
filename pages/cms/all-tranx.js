// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function AllTranx() {
  // Debug
  //console.log("Debug AllTranx: ",)

  // Return component
  return (
    <CmsContent title="All Transactions">
      {/** Section 1 */}
      <div>
        <h1 className="font-bold">All Tranx</h1>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default AllTranx;
