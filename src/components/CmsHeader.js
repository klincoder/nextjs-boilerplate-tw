// Import resources
import React, { useState } from "react";
import {
  appImages,
  navLinks,
  notificationsList,
  profileList,
} from "../config/data";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose, AiFillShopping, AiFillBell } from "react-icons/ai";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

// Import custom files
import tw from "../styles/twStyles";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";
import CmsSidebar from "./CmsSidebar";
import { cmsMenuAtom } from "../recoil/atoms";
import CustomDivider from "./CustomDivider";
import CustomLogout from "./CustomLogout";

// Component
function PageHeaderCms() {
  // Define state
  // const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useRecoilState(cmsMenuAtom);

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
    <nav className="sticky top-0 p-6 border-b border-gray-100 bg-white">
      {/** NAV LINKS CONTAINER */}
      <div className="flex items-center justify-between">
        {/** Logo */}
        <div className="pt-2">
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

        {/** ICONS */}
        <div className="flex items-center relative gap-5">
          {/** Normal icons */}
          {/* <CustomButton isLink href="/">
              <a className="text-gray-500 mr-4 hover:text-gray-700 focus:text-gray-700">
                <AiFillShopping size={24} />
              </a>
            </CustomButton> */}

          {/** Notification icon */}
          <div className="dropdown-start relative">
            <a
              role="button"
              id="notificationsIcon"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className="dropdown-toggle flex items-center hidden-arrow text-gray-500 hover:text-gray-700 focus:text-gray-700"
            >
              <AiFillBell size={24} />
              <span className="text-white bg-primary absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                {notificationsList?.length}
              </span>
            </a>
            {/** Dropdown list */}
            <ul
              aria-labelledby="notificationsIcon"
              className="dropdown-menu min-w-max py-2 mt-1 m-0 absolute hidden bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg bg-clip-padding border-none left-auto right-0"
            >
              {/** Loop notifications list */}
              {notificationsList?.length > 0 &&
                notificationsList?.map((item, index) => (
                  <li
                    key={item?.id + index}
                    className="dropdown-item py-2 px-4 hover:bg-gray-100"
                  >
                    <p className="text-sm font-normal bg-transparent text-gray-700">
                      <span>{item?.title}</span>
                      <span>{item?.description}</span>
                    </p>
                  </li>
                ))}
            </ul>
          </div>

          {/** Profile icon */}
          <div className="dropdown-start relative">
            <a
              role="button"
              id="profileIcon"
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
            {/** Profile list */}
            <ul
              aria-labelledby="profileIcon"
              className="dropdown-menu min-w-max py-2 mt-1 m-0 absolute hidden bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg bg-clip-padding border-none left-auto right-0"
            >
              {/** Loop profile list */}
              {profileList?.length > 0 &&
                profileList?.map((item, index) => (
                  <li
                    key={item?.id + index}
                    className="dropdown-item py-1 px-4 hover:bg-gray-100"
                  >
                    <CustomButton isLink href={item?.link}>
                      <a className="text-sm font-normal bg-transparent text-gray-700">
                        {item?.title}
                      </a>
                    </CustomButton>
                  </li>
                ))}
              {/** Divider */}
              <CustomDivider />
              {/** Logput */}
              <li>
                <CustomLogout />
                {/* <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                  Logout
                </a> */}
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
  ); // close return
} // close component

// Export
export default PageHeaderCms;
