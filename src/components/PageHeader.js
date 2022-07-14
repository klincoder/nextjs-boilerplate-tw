// Import resources
import React, { useState } from "react";
import { appImages, navLinks } from "../config/data";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

// Import custom files
import tw from "../styles/twStyles";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";

// Component
function PageHeader() {
  // Define state
  const [toggleMenu, setToggleMenu] = useState(false);

  // Define router
  const router = useRouter();

  // Debug
  //console.log("Debug pageHeader: ", router.pathname);

  // FUNCTIONS
  // HANDLE TOGGLE MENU
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }; // close funx

  // Return component
  return (
    <nav className="relative container mx-auto p-6">
      {/** Links container */}
      <div className="flex items-center justify-between">
        {/** Logo */}
        <div className="pt-2 cursor-pointer">
          <CustomButton isLink href="/" passHref>
            <a>
              <CustomImage
                image={appImages?.logo}
                alt="logo"
                // width={146}
                // height={24}
              />
            </a>
          </CustomButton>
        </div>

        {/** Links */}
        <div className="hidden space-x-6 md:flex">
          {/** Loop navLinks */}
          {navLinks?.length > 0 &&
            navLinks?.map((item) => (
              <CustomButton isLink key={item?.id} href={item?.link}>
                <a
                  className={` hover:text-brightRed ${
                    router.pathname === item?.link ? "text-brightRed" : ""
                  }`}
                >
                  {item?.title}
                </a>
              </CustomButton>
            ))}
        </div>

        {/** Login button */}
        <CustomButton id="menuBtn" isLink href="/login">
          <a className={`${tw?.btnPrimary} hidden md:block`}>Login</a>
        </CustomButton>

        {/** Toggle menu button */}
        <CustomButton
          isNormal
          id="toggleBtn"
          onClick={handleToggleMenu}
          className={`block hamburger pb-2 md:hidden focus:outline-none`}
        >
          {/** If toggle menu */}
          {toggleMenu ? (
            <AiOutlineClose size={30} className="text-darkBlue" />
          ) : (
            <HiMenuAlt1 size={30} className="text-darkBlue" />
          )}
        </CustomButton>
      </div>

      {/** Mobile menu links */}
      {toggleMenu && (
        <div className="md:hidden">
          <div
            id="menuLinks"
            className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            {/** Loop navLinks */}
            {navLinks?.length > 0 &&
              navLinks?.map((item) => (
                <CustomButton isLink key={item?.id} href={item?.link}>
                  <a className="hover:text-darkGrayishBlue">{item?.title}</a>
                </CustomButton>
              ))}
          </div>
        </div>
      )}
    </nav>
  ); // close return
} // close component

// Export
export default PageHeader;
