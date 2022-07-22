// Import resources
import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

// Import custom files
import tw from "../src/styles/twStyles";
import { appImages } from "../src/config/data";
import PageContent from "../src/components/PageContent";
import CustomButton from "../src/components/CustomButton";

// Component
function ErrorPage() {
  // Debug
  //console.log("Debug Errorpage: ",)

  // Return component
  return (
    <PageContent title="Not Found">
      {/** SECTION - PAGE DETAILS */}
      <section id="errorPage" className="bg-white">
        {/** CONTAINER */}
        <div className="container flex flex-col items-center mx-auto px-4 pt-14 py-40">
          {/** Icon */}
          <AiOutlineWarning size={100} className="text-lightPrimary mb-3" />

          {/** Title */}
          <div className="text-3xl mb-2">Page not found</div>

          {/** Button */}
          <CustomButton isLink href="/">
            <a className={tw?.btnSecondary}>Back to home</a>
          </CustomButton>
        </div>
      </section>
    </PageContent>
  ); // close return
} // close component

// Export
export default ErrorPage;
