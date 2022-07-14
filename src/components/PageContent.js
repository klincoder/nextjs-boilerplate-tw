// Import resources
import React from "react";

// Import custom files
import PageMeta from "./PageMeta";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

// Component
function PageContent({ title, description, keywords, screenshot, children }) {
  // Debug
  //console.log("Debug pageContent: ",)

  // Return component
  return (
    <div className="min-h-screen">
      {/** Page meta */}
      <PageMeta
        isNormal
        title={title}
        description={description}
        keywords={keywords}
        screenshot={screenshot}
      />

      {/** Header */}
      <PageHeader />

      {/** Page body */}
      <>{children}</>

      {/** Footer */}
      <div className="sticky top-full">
        <PageFooter />
      </div>
    </div>
  ); // close return
} // close component

// Export
export default PageContent;
