// Import resources
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaTachometerAlt, FaCog } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";
import useAppSettings from "../hooks/useAppSettings";
import { cmsMenuAtom } from "../recoil/atoms";
import { adminNavLinks, appImages, userNavLinks } from "../config/data";

// Component
function CmsSidebar() {
  // Define router
  const router = useRouter();
  const routerPath = router.pathname;

  // Define toggle menu
  const toggleMenu = useRecoilValue(cmsMenuAtom);

  // Define app settings
  const { userID, userRole } = useAppSettings();

  // Debug
  // console.log("Debug cmsSidebar: ", {
  //   path: router.pathname,
  //   //opt: userNavLinks[1]?.options?.[0]?.link,
  //   optLinks: isDropdownOptLinks,
  //   isPath: isDropdownOptLinks?.includes(router.pathname),
  // });

  // FUNCTIONS
  // HANDLE ROLE LINKS
  const handleRoleLinks = () => {
    // If no args, return
    //if (!userRole) return [];
    // Switch user role
    switch ("user") {
      case "admin":
        return adminNavLinks;
      default:
        return userNavLinks;
    } // close switch
  }; // close fxn

  // Return component
  return (
    <div
      id="cmsSidebar"
      className={`
        ${!toggleMenu && "hidden"} 
        fixed w-60 h-full shadow-md bg-white overflow-auto md:block
      `}
    >
      {/** LOGO */}
      <div className="cursor-pointer pt-8 pb-4 px-6">
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

      {/** SIDEBAR LINKS */}
      <ul className="px-1 relative">
        {/** Dashboard */}
        <li id="normalCmsNavLink" className="relative">
          <CustomButton isLink href="/cms">
            <a
              className={`${
                routerPath === "/cms" ? "text-primary" : "text-gray-700"
              } flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out`}
            >
              {/** Icon */}
              <FaTachometerAlt className={tw?.cmsNavIconLeft} />
              {/** Title */}
              <span>Dashboard</span>
            </a>
          </CustomButton>
        </li>

        {/** Loop links - Normal */}
        {handleRoleLinks()?.length > 0 &&
          handleRoleLinks()?.map((item, index) => {
            // If item?.isDropdown
            if (item?.isDropdown) {
              // Get all options links array
              const allOptLinksArr = item?.options?.map((obj) => {
                return obj?.link;
              });
              // Return list
              return (
                <li
                  key={item?.id + index}
                  id="dropdownCmsNavLink"
                  className="relative"
                >
                  <CustomButton isLink href={item?.link}>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseDropdownCmsNavLink"
                      aria-expanded="false"
                      aria-controls="collapseDropdownCmsNavLink"
                      className={`${
                        allOptLinksArr?.includes(routerPath)
                          ? "text-primary"
                          : "text-gray-700"
                      } flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out cursor-pointer`}
                    >
                      {/** Icon */}
                      {item?.leftIcon}
                      {/** Title */}
                      <span>{item?.title}</span>
                      {/** Caret icon */}
                      <IoIosArrowDown className="w-3 h-3 ml-auto" />
                    </a>
                  </CustomButton>
                  {/** Dropdown links */}
                  <ul
                    id="collapseDropdownCmsNavLink"
                    aria-labelledby="dropdownCmsNavLink"
                    data-bs-parent="#cmsSidebar"
                    className="relative accordion-collapse collapse"
                  >
                    {/** Loop dropdown links */}
                    {item?.options?.length > 0 &&
                      item?.options?.map((opt, optIndex) => (
                        <li key={optIndex + 1} className="relative">
                          <CustomButton isLink href={opt?.link}>
                            <a
                              className={`${
                                routerPath === opt?.link
                                  ? "text-primary"
                                  : "text-gray-700"
                              } flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out`}
                            >
                              {/** Title */}
                              {opt?.title}
                            </a>
                          </CustomButton>
                        </li>
                      ))}
                  </ul>
                </li>
              ); // close return
            } else {
              return (
                <li
                  key={item?.id + index}
                  id="normalCmsNavLink"
                  className="relative"
                >
                  <CustomButton isLink href={item?.link}>
                    <a
                      className={`${
                        routerPath === item?.link
                          ? "text-primary"
                          : "text-gray-700"
                      } flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out`}
                    >
                      {/** Icon */}
                      {item?.leftIcon}
                      {/** Title */}
                      <span>{item?.title}</span>
                    </a>
                  </CustomButton>
                </li>
              ); // close return
            } // close if
          })}

        {/** Divider */}
        <hr className="my-2" />

        {/** Settings */}
        <li id="normalCmsNavLink" className="relative">
          <CustomButton isLink href="/cms/settings">
            <a
              className={`${
                routerPath === "/cms/settings"
                  ? "text-primary"
                  : "text-gray-700"
              } flex items-center text-sm pt-4 px-6 pb-24 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out`}
            >
              {/** Icon */}
              <FaCog className={tw?.cmsNavIconLeft} />
              {/** Title */}
              <span>Settings</span>
            </a>
          </CustomButton>
        </li>
      </ul>

      {/** SIDEBAR FOOTER */}
      {/* <div className="absolute w-full bottom-0 text-center">
        <hr className="m-0" />
        <p className="pt-2 pb-4 text-sm text-gray-700">tailwind-elements.com</p>
      </div> */}
    </div>
  ); // close return
} // close component

// Export
export default CmsSidebar;
