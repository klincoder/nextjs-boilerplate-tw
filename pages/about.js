// Import resources
import React from "react";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import { appImages } from "../src/config/data";

// Component
function About() {
  // Debug
  //console.log("Debug about: ",)

  // Return component
  return (
    <PageContent title="About Us">
      {/** SECTION - PAGE DETAILS */}
      <p>About</p>
    </PageContent>
  ); // close return
} // close component

// Export
export default About;
