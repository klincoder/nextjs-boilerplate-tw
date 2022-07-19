// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function UserTranx() {
  // Debug
  //console.log("Debug userTranx: ",)

  // Return component
  return (
    <CmsContent title="User Transactions">
      {/** Section 1 */}
      <div>
        <h1 className="font-bold">User Transactions</h1>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default UserTranx;
