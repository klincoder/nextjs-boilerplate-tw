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
      <div className={`${tw?.sectionContainer} flex-col-reverse`}>
        {/** COL 1 */}
        <div className={tw?.sectionCol}>
          {/** Title */}
          <h1 className={`${tw?.sectionHeading} md:text-5xl`}>
            Bring everyone together to build better products.
          </h1>
          {/** Sub title */}
          <p className={tw?.sectionPara}>
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
