// Import resources
import React from "react";
import { getSession } from "next-auth/react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages, baseUrl } from "../../src/config/data";
import VerifyPageAccess from "../../src/components/VerifyPageAccess";

// Component
function AllUsers({ currSession }) {
  // Debug
  //console.log("Debug allUsers: ",)

  // Return component
  return (
    <CmsContent title="All Users">
      {/** VERIFY PAGE ACCESS */}
      <VerifyPageAccess currSession={currSession} pageAccess="admin">
        {/** SECTION 1 */}
        <div>
          <h1 className="font-bold">All Users</h1>
        </div>
      </VerifyPageAccess>
    </CmsContent>
  ); // close return
} // close component

// Export
export default AllUsers;

// GET SEVERSIDE PROPS
export async function getServerSideProps(context) {
  // Get session
  const session = await getSession(context);
  // If no session, redirect
  if (!session) {
    return {
      redirect: {
        destination: `/login?callbackUrl=${baseUrl}/cms`,
        permanent: false,
      }, // close redirect
    }; // close return
  } // close if !session

  // Return props
  return {
    props: {
      currSession: session ? session : null,
    }, // close props
  }; // close return
} // close getServerSide
