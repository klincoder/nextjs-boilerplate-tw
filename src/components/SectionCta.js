// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";

// Component
function SectionCta() {
  // Debug
  //console.log("Debug sectionCta: ",)

  // Return component
  return (
    <section id="cta" className="bg-primary">
      {/** CONTAINER */}
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/** COL 1 */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works.
        </h2>

        {/** Button */}
        <div>
          <CustomButton isLink href="/register">
            <a className={`${tw?.btnSecondary} shadow-2xl`}>Get Started</a>
          </CustomButton>
        </div>
      </div>
    </section>
  ); // close return
} // close component

// Export
export default SectionCta;
