// Import resources
import React from "react";
import { getSession } from "next-auth/react";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import CustomCard from "../src/components/CustomCard";
import FormPasswordRecovery from "../src/components/FormPasswordRecovery";
import { appImages } from "../src/config/data";

// Component
function PasswordRecovery({ currSession }) {
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

// GET SERVER SIDE PROPS
export async function getServerSideProps(context) {
  // Get current session
  const session = await getSession(context);
  // If session, redirect to homepage
  if (session) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      }, // close redirect
    }; // close return
  } // close if session

  // Return props
  return {
    props: {
      currSession: session ? session?.user : null,
    }, // close props
  }; // close return
} // close getServerSideProps
