// Import resources
import React, { useState } from "react";
import { appImages, navLinks } from "../config/data";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose, AiFillShopping, AiFillBell } from "react-icons/ai";
import { useRouter } from "next/router";

// Import custom files
import tw from "../styles/twStyles";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";
import CmsSidebar from "./CmsSidebar";

// Component
function PageHeaderCms() {
  // Define state
  const [toggleMenu, setToggleMenu] = useState(false);

  // Define router
  const router = useRouter();

  // Debug
  //console.log("Debug pageHeaderCms: ", router.pathname);

  // FUNCTIONS
  // HANDLE TOGGLE MENU
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }; // close funx

  // Return component
  return (
    <>
      <nav className="relative p-6 border-b border-gray-100">
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
          {/* <div className="hidden space-x-6 md:flex">
          {navLinks?.length > 0 &&
            navLinks?.map((item) => (
              <CustomButton isLink key={item?.id} href={item?.link}>
                <a
                  className={` hover:text-primary ${
                    router.pathname === item?.link ? "text-primary" : ""
                  }`}
                >
                  {item?.title}
                </a>
              </CustomButton>
            ))}
        </div> */}

          {/** Login button */}
          {/* <CustomButton id="menuBtn" isLink href="/login">
          <a className={`${tw?.btnPrimary} hidden md:block`}>Login</a>
        </CustomButton> */}

          {/** RIGHT CONTAINER */}
          <div className="flex items-center relative">
            {/** Normal icons */}
            {/* <CustomButton isLink href="/">
          <a className="text-gray-500 mr-4 hover:text-gray-700 focus:text-gray-700">
            <AiFillShopping size={24} />
          </a>
          </CustomButton> */}

            {/** Dropdown icons - Notification */}
            <div className="dropdown relative mr-5">
              <CustomButton isLink href="/">
                <a
                  role="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="dropdown-toggle flex items-center hidden-arrow text-gray-500 hover:text-gray-700 focus:text-gray-700"
                >
                  <AiFillBell size={24} />
                  <span className="text-white bg-primary absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                    1
                  </span>
                </a>
              </CustomButton>
              {/** Dropdown links */}
              <ul
                aria-labelledby="dropdownMenuButton1"
                className="dropdown-menu min-w-max py-2 mt-1 m-0 absolute hidden bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg bg-clip-padding border-none left-auto right-0"
              >
                {/** Loop links */}
                <li>
                  <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparenttext-gray-700 hover:bg-gray-100">
                    Action
                  </a>
                </li>
              </ul>
            </div>

            {/** User avatar */}
            <div className="dropdown relative mr-5">
              <CustomButton isLink href="/cms">
                <a
                  role="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="dropdown-toggle flex items-center hidden-arrow"
                >
                  <CustomImage
                    image={appImages?.avatar}
                    imgClass="rounded-full"
                    alt="avatar"
                    width={25}
                    height={25}
                  />
                </a>
              </CustomButton>
              {/** User avatar links */}
              <ul
                aria-labelledby="dropdownMenuButton2"
                className="dropdown-menu min-w-max py-2 mt-1 m-0 absolute hidden bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg bg-clip-padding border-none left-auto right-0"
              >
                <li>
                  <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                    Action
                  </a>
                </li>
              </ul>
            </div>

            {/** Toggle menu button */}
            <CustomButton
              isNormal
              id="toggleMenuBtn"
              onClick={handleToggleMenu}
              btnClass={`block hamburger md:hidden focus:outline-none`}
            >
              {/** If toggle menu */}
              {toggleMenu ? (
                <AiOutlineClose size={30} className="text-black" />
              ) : (
                <HiMenuAlt1 size={30} className="text-black" />
              )}
            </CustomButton>
          </div>
        </div>
      </nav>

      {/** CMS SIDEBAR */}
      <CmsSidebar toggleMenu={toggleMenu} />
      {/** Cms sidebar - Mobile menu */}
      {/* {toggleMenu && <CmsSidebar />} */}
    </>
  ); // close return
} // close component

// Export
export default PageHeaderCms;
