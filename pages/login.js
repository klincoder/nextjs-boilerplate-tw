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
        <div className="container mx-auto flex items-center justify-center px-4 py-14 w-full md:space-y-0">
          {/** Card */}
          <CustomCard>
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
