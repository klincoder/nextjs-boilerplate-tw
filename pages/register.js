// Import resources
import React from "react";
import { getSession } from "next-auth/react";

// Import custom files
import tw from "../src/styles/twStyles";
import { appImages } from "../src/config/data";
import PageContent from "../src/components/PageContent";
import CustomCard from "../src/components/CustomCard";
import FormRegister from "../src/components/FormRegister";

// Component
function Register({ currSession }) {
  // Debug
  //console.log("Debug register: ",)

  // Return component
  return (
    <PageContent title="Register">
      {/** SECTION - PAGE DETAILS */}
      <section id="register" className="bg-white">
        {/** CONTAINER */}
        <div className="container mx-auto w-full flex items-center justify-center px-4 pt-14 pb-24 md:space-y-0">
          {/** Card */}
          <CustomCard isNormal title="Register">
            {/** Form */}
            <FormRegister />
          </CustomCard>
        </div>
      </section>
    </PageContent>
  ); // close return
} // close component

// Export
export default Register;

// GET SERVERSIDE PROPS
export async function getServerSideProps(context) {
  // Get current session
  const session = await getSession(context);
  // If session, redirect
  if (session) {
    return {
      redirect: {
        destination: `/cms`,
        permanent: false,
      }, // close redirect
    }; // close return
  } // close if session

  // If no session, return props
  return {
    props: {
      currSession: session ? session?.user : null,
    }, // close props
  }; // close return
} // close getServerSide
