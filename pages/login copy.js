// Import resources
import React from "react";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import { appImages } from "../src/config/data";
import CustomTextInput from "../src/components/CustomTextInput";

// Component
function Login() {
  // Debug
  //console.log("Debug login: ",)

  // Return component
  return (
    <PageContent title="Login">
      {/** SECTION - PAGE DETAILS */}
      <section id="login" className="bg-white">
        {/** CONTAINER */}
        <div className="container flex mx-auto px-4 py-24 md:flex-row md:space-y-0">
          {/** COL 1 */}
          <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
            {/** TEST */}
            <CustomTextInput
              label="Full name"
              name="fullName"
              //errName="Invalid name"
              //errTouched="true"
            />
          </div>

          {/** COL 2 */}
          <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
            <p>Col 2</p>
          </div>
        </div>
      </section>
    </PageContent>
  ); // close return
} // close component

// Export
export default Login;
