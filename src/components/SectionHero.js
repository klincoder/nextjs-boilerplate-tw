// Import resources
import React from "react";
import { appImages } from "../config/data";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";

// Component
function SectionHero() {
  // Debug
  //console.log("Debug sectionHero: ",)

  // Return component
  return (
    <section id="hero">
      {/** CONTAINER */}
      <div className="container flex flex-col-reverse mx-auto px-6 items-center mt-10 space-y-0 md:flex-row md:space-y-0">
        {/** COL 1 */}
        <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
          {/** Title */}
          <h1 className="max-w-md text-4xl font-bold text-center md:text-left md:text-5xl">
            Bring everyone together to build better products.
          </h1>
          {/** Sub title */}
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping larger teeam goals in view.
          </p>
          {/** Button */}
          <div className="flex justify-center md:justify-start">
            <CustomButton isLink href="/register">
              <a className={tw?.btnPrimary}>Get Started</a>
            </CustomButton>
          </div>
        </div>

        {/** COL 2 */}
        <div className="md:w-1/2">
          <img src="hero.svg" alt="hero" />
          {/* <CustomImage
            image={appImages?.hero}
            alt="hero"
            //width={350}
            //height={350}
            //layout="fill"
          /> */}
        </div>
      </div>
    </section>
  ); // close return
} // close component

// Export
export default SectionHero;
