// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function FundWallet() {
  // Debug
  //console.log("Debug fundWallet: ",)

  // Return component
  return (
    <CmsContent title="Fund Wallet">
      {/** Section 1 */}
      <div>
        <h1 className="font-bold">Fund Wallet</h1>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default FundWallet;
