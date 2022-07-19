// Import resources
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaTachometerAlt, FaCog } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { userNavLinks } from "../config/data";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";

// Component
function CmsSidebar({ toggleMenu }) {
  // Debug
  //console.log("Debug cmsSidebar: ",)

  // Return component
  return (
    <div
      id="cmsSidebar"
      className={`
      ${!toggleMenu && "hidden"} 
      absolute w-60 h-full pt-6 shadow-md bg-white md:block`}
    >
      {/** SIDEBAR LINKS */}
      <ul className="relative px-1">
        {/** Dashboard */}
        <li id="normalCmsNavLink" className="relative">
          <CustomButton isLink href="/cms">
            <a
              //data-mdb-ripple="true"
              //data-mdb-ripple-color="primary"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out"
            >
              {/** Icon */}
              <FaTachometerAlt className={tw?.cmsNavIconLeft} />
              {/** Title */}
              <span>Dashboard</span>
            </a>
          </CustomButton>
        </li>

        {/** Loop links - Normal */}
        {userNavLinks?.length > 0 &&
          userNavLinks?.map((item, index) => {
            // If item?.isDropdown
            if (item?.isDropdown) {
              return (
                <li id="dropdownCmsNavLink" className="relative">
                  <CustomButton isLink href="/cms">
                    <a
                      //data-mdb-ripple="false"
                      //data-mdb-ripple-color="primary"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseDropdownCmsNavLink"
                      aria-expanded="false"
                      aria-controls="collapseDropdownCmsNavLink"
                      className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out cursor-pointer"
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
                          <CustomButton isLink href="/cms">
                            <a
                              //data-mdb-ripple="true"
                              //data-mdb-ripple-color="primary"
                              className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out"
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
                  <CustomButton isLink href="/cms">
                    <a
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="primary"
                      className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out"
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
          <CustomButton isLink href="/cms">
            <a
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-primary transition duration-300 ease-in-out"
            >
              {/** Icon */}
              <FaCog className="w-3 h-3 mr-3" />
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
