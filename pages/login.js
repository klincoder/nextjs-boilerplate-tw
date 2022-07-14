// Import resources
import React, { useState } from "react";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import CustomTextInput from "../src/components/CustomTextInput";
import CustomButton from "../src/components/CustomButton";
import CustomCheckbox from "../src/components/CustomCheckbox";
import CustomRadio from "../src/components/CustomRadio";
import { appImages } from "../src/config/data";

// Component
function Login() {
  // Define state
  const [radioState, setRadioState] = useState(null);
  const [checkedState, setCheckedState] = useState([]);

  // Debug
  //console.log("Debug login: ", checkedState?.length);

  // FUNCTIONS
  // HANDLE CHECKED STATE
  const handleCheckedState = (val) => {
    // If empty args, return null
    if (!val) return null;
    // Define variables
    const isSelected = checkedState?.includes(val);
    // const valIndex = checkedState?.indexOf(val);
    // If !isSelected
    if (isSelected) {
      // Remove from array
      const valIndex = checkedState?.indexOf(val);
      valIndex !== -1 && checkedState?.splice(valIndex, 1);
      // Debbug
      // console.log("Debug handleCheckedState: ", {
      //   isSelected,
      //   valIndex,
      // });
    } else {
      // Add to array
      setCheckedState((s) => [...s, val]);
    } // close if
  }; // close if

  // Return component
  return (
    <PageContent title="Login">
      {/** SECTION - PAGE DETAILS */}
      <section id="login">
        {/** CONTAINER */}
        <div className="container flex mx-auto px-4 py-16 items-center justify-center md:space-y-0">
          {/** FORM CONTAINER */}
          <div className="w-full md:w-2/5 px-4">
            <div className="flex flex-col pt-6 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-veryLightGray border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                {/** Form */}
                <form autoComplete="off">
                  {/** Email address */}
                  <CustomTextInput label="Username or email" name="username" />

                  {/** Pass */}
                  <CustomTextInput label="Password" name="pass" />

                  {/** Remember me */}
                  <CustomCheckbox
                    label="Remember me"
                    name="rememberMe"
                    //checkedVal={checkedState?.value}
                    data={["Male1", "Female2"]}
                    onChange={(e) => {
                      // Define selected val
                      const selectedVal = e.target.value;
                      handleCheckedState(selectedVal);
                      //console.log("Debug onChangeChecked: ", selectedVal);
                    }}
                  />

                  {/** Gender */}
                  <CustomRadio
                    label="Gender"
                    name="gender"
                    checkedVal={radioState}
                    data={["Male", "Female"]}
                    onChange={(e) => {
                      setRadioState(e.target.value);
                      //console.log("Debug onChangeRadio: ", e.target.value);
                    }}
                  />

                  {/** Button */}
                  <div className="text-center mt-6">
                    <CustomButton
                      isNormal
                      type="submit"
                      className={`${tw?.btnPrimary} w-full`}
                    >
                      Login
                    </CustomButton>
                  </div>
                </form>
              </div>
            </div>

            {/** OTHER LINKS */}
            <div className="flex flex-wrap mt-6">
              {/** Forgot password */}
              <div className="w-1/2">
                <CustomButton isLink href="/register">
                  <a className="text-blueGray-200">
                    <small>Forgot password?</small>
                  </a>
                </CustomButton>
              </div>
              {/** Register */}
              <div className="w-1/2 text-right">
                <CustomButton isLink href="/register">
                  <a className="text-blueGray-200">
                    <small>Create new account</small>
                  </a>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContent>
  ); // close return
} // close component

// Export
export default Login;
