// Import resources
import React from "react";
import { appImages, testimnialsList } from "../config/data";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";

// Component
function SectionTestimonials() {
  // Debug
  //console.log("Debug sectionTestimonials: ",)

  // Return component
  return (
    <section id="testimonials">
      {/** CONTAINER */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/** Heading */}
        <h2 className="text-4xl font-bold text-center">
          Customer testimonials
        </h2>

        {/** Testimonials container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/** Loop testimnialsList */}
          {testimnialsList?.length > 0 &&
            testimnialsList?.map((item, index) => (
              <div
                key={item?.id}
                className={`${
                  index === 0 ? "flex" : "hidden md:flex"
                } flex-col items-center p-6 space-y-6 mb-24 bg-veryLightGray md:w-1/3`}
              >
                {/** Image */}
                <div className="-mt-14 ">
                  <CustomImage
                    image={item?.image}
                    imgClass="rounded-full"
                    width={80}
                    height={80}
                  />
                </div>
                {/** Name */}
                <h5 className="text-lg font-bold">{item?.name}</h5>
                {/** Quote */}
                <p className="text-sm text-darkGrayishBlue">{item?.quote}</p>
              </div>
            ))}
        </div>
        {/** Button */}
        {/* <div className="my-16">
          <CustomButton isLink href="/register">
            <a className={tw?.btnPrimary}>Get Started</a>
          </CustomButton>
        </div> */}
      </div>
    </section>
  ); // close return
} // close component

// Export
export default SectionTestimonials;
