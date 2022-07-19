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
function PageFooterCms() {
  // Define app settings
  const { siteInfo } = useAppSettings();

  // Define router
  const router = useRouter();

  // Debug
  //console.log("Debug pagefooterCms: ",)

  // Return component
  return (
    <footer className="relative w-full bg-white">
      {/** CONTAINER */}
      <div className="px-6 py-4">
        {/** Copyright */}
        <div className="text-center text-sm">
          Copyright &copy; {`${moment.utc().format("YYYY")} ${siteInfo?.name}`}
        </div>
      </div>
    </footer>
  ); // close return
} // close component

// Export
export default PageFooterCms;
