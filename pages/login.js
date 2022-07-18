// Import resources
import React from "react";
import { getCsrfToken, getSession } from "next-auth/react";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import FormLogin from "../src/components/FormLogin";
import { appImages } from "../src/config/data";
import CustomCard from "../src/components/CustomCard";
import CustomSwitch from "../src/components/CustomSwitch";

// Component
function Login({ csrfToken }) {
  // Debug
  //console.log("Debug login: ",);

  // Return component
  return (
    <PageContent title="Login">
      {/** SECTION - PAGE DETAILS */}
      <section id="login" className="bg-white">
        {/** CONTAINER */}
        <div className="container mx-auto w-full flex items-center justify-center px-4 pt-14 pb-24 md:space-y-0">
          {/** Card */}
          <CustomCard isNormal title="Login">
            {/** Form */}
            <FormLogin csrfToken={csrfToken} />
          </CustomCard>
        </div>
      </section>
    </PageContent>
  ); // close return
} // close component

// Export
export default Login;

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
      },
    }; // close return
  } // close if session

  // Return props
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      currSession: session ? session?.user : null,
    }, // close props
  }; // close return
} // close getServerSideProps
