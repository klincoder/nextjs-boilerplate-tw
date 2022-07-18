// Import resources
import React from "react";
import moment from "moment";
import { useRouter } from "next/router";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";
import useAppSettings from "../hooks/useAppSettings";
import { appImages, companyLinks, socialLinks } from "../config/data";

// Component
function PageFooter() {
  // Define app settings
  const { siteInfo } = useAppSettings();

  // Define router
  const router = useRouter();

  // Debug
  //console.log("Debug pagefooter: ",)

  // Return component
  return (
    <footer className="bg-secondary">
      {/** CONTAINER */}
      <div className="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/** COL 1 - LOGO & SOCIAL LINKS */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          {/** Copyright - small screems */}
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy;{" "}
            {`${moment.utc().format("YYYY")} ${siteInfo?.name}`}
          </div>
          {/** Logo */}
          <div>
            <CustomImage
              image={appImages?.logoWhite}
              alt="logo"
              width={146}
              height={24}
            />
          </div>
          {/** Social links */}
          <div className="flex justify-center space-x-4">
            {/** Loop socialLinks */}
            {socialLinks?.length > 0 &&
              socialLinks?.map((item) => (
                <div key={item?.id}>
                  <CustomImage
                    image={item?.image}
                    alt={item?.slug}
                    width={20}
                    height={20}
                  />
                </div>
              ))}
          </div>
        </div>

        {/** COL 2 - COMPANY LINKS */}
        <div className="flex justify-around space-x-32">
          {/** Links 1 */}
          <div className="flex flex-col space-y-3 text-white">
            {/** Loop companyLinks - slice 0 to 4 */}
            {companyLinks?.length > 0 &&
              companyLinks?.slice(0, 4)?.map((item) => (
                <CustomButton key={item?.id} isLink href={item?.link}>
                  <a
                    className={` hover:text-primary ${
                      router.pathname === item?.link ? "text-primary" : ""
                    }`}
                  >
                    {item?.title}
                  </a>
                </CustomButton>
              ))}
          </div>
          {/** Links 2 */}
          <div className="flex flex-col space-y-3 text-white">
            {/** Loop companyLinks - slice from 5 */}
            {companyLinks?.length > 0 &&
              companyLinks?.slice(4)?.map((item) => (
                <CustomButton key={item?.id} isLink href={item?.link}>
                  <a
                    className={` hover:text-primary ${
                      router.pathname === item?.link ? "text-primary" : ""
                    }`}
                  >
                    {item?.title}
                  </a>
                </CustomButton>
              ))}
          </div>
        </div>

        {/** COL 3 - SUBSCRIBE TO OFFICIAL UPDATES */}
        <div className="flex flex-col justify-between">
          {/** Form */}
          <form>
            {/** Email address */}
            <div className="flex space-x-3">
              {/** Input */}
              <input
                type="text"
                name="emailAddr"
                className="flex-1 px-4 rounded h-12 focus:outline-none"
                placeholder="Enter email address"
              />
              {/** Button */}
              <CustomButton
                isNormal
                type="submit"
                btnClass={tw?.btnPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Clicked form!");
                }}
              >
                Go
              </CustomButton>
            </div>
          </form>

          {/** Copyright - large screens */}
          <div className="hidden text-white md:block">
            Copyright &copy;{" "}
            {`${moment.utc().format("YYYY")} ${siteInfo?.name}`}
          </div>
        </div>
      </div>
    </footer>
  ); // close return
} // close component

// Export
export default PageFooter;
