// Import resources
import React from "react";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import CustomCard from "../src/components/CustomCard";
import FormPasswordRecovery from "../src/components/FormPasswordRecovery";
import { appImages } from "../src/config/data";

// Component
function PasswordRecovery() {
  // Debug
  //console.log("Debug passwordRecovery: ",)

  // Return component
  return (
    <PageContent title="Password Recovery">
      {/** SECTION - PAGE DETAILS */}
      <section id="passwordRecovery" className="bg-white">
        {/** CONTAINER */}
        <div className="container mx-auto w-full flex items-center justify-center px-4 pt-14 pb-24 md:space-y-0">
          {/** Card */}
          <CustomCard
            isNormal
            title="Password Recovery"
            //titleClass="text-center"
          >
            {/** Form */}
            <FormPasswordRecovery />
          </CustomCard>
        </div>
      </section>
    </PageContent>
  ); // close return
} // close component

// Export
export default PasswordRecovery;
