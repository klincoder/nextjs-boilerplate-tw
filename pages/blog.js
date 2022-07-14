// Import resources
import React from "react";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import { appImages } from "../src/config/data";

// Component
function Blog() {
  // Debug
  //console.log("Debug blog: ",)

  // Return component
  return (
    <PageContent title="Blog">
      {/** SECTION - PAGE DETAILS */}
      <p>Blog</p>
    </PageContent>
  ); // close return
} // close component

// Export
export default Blog;
