// Import resources
import React from "react";
import { featuresList } from "../config/data";

// Import custom files
import tw from "../styles/twStyles";

// Component
function SectionFeatures() {
  // Debug
  //console.log("Debug sectionFeatures: ",)

  // Return component
  return (
    <section id="features" className="bg-gray-50">
      {/** CONTAINER */}
      <div className="container flex flex-col mx-auto px-4 py-24 space-y-8 md:flex-row md:space-y-0">
        {/** COL 1 */}
        <div className="flex flex-col space-y-12 self-center md:w-1/2">
          {/** Title */}
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          {/** Sub title */}
          <p className="max-w-sm text-center text-black md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/** COL 2 */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/** Loop featuresList */}
          {featuresList?.length > 0 &&
            featuresList?.map((item, index) => (
              // List container
              <div
                key={item?.id}
                className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
              >
                {/** Heading */}
                <div className="rounded-l-full bg-veryLightPrimary md:bg-transparent">
                  {/** Numbering */}
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primary">
                      {`0${index + 1}`}
                    </div>
                    {/** Title - small screens */}
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      {item?.title}
                    </h3>
                  </div>
                </div>
                {/** Title - large screens */}
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    {item?.title}
                  </h3>
                  <p>{item?.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  ); // close return
} // close component

// Export
export default SectionFeatures;
