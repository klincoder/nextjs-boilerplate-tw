// Import resources
import React from "react";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import { appImages } from "../src/config/data";

// Component
function Privacy() {
  // Debug
  //console.log("Debug privacy: ",)

  // Return component
  return (
    <PageContent title="Privacy">
      {/** SECTION - PAGE DETAILS */}
      <p>Privacy</p>
    </PageContent>
  ); // close return
} // close component

// Export
export default Privacy;
