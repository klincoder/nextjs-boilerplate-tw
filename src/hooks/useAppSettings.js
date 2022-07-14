// Import resources
import { useRecoilValue } from "recoil";

// Import custom files
import { appSettingsAtom } from "../recoil/atoms";

// Compnent
function useAppSettings() {
  // Define all settings
  const allSettings = useRecoilValue(appSettingsAtom);

  // Define general settings
  const generalSettings = allSettings?.find(
    ({ id }) => id === "generalSettings"
  )?.data;

  // Define site info
  const siteInfo = {
    logo: generalSettings?.logo,
    name: generalSettings?.name,
    tagline: generalSettings?.siteTagline,
    email: generalSettings?.supportEmail,
    phone: generalSettings?.supportPhone,
    noReply: generalSettings?.supportEmailNoReply,
    copyrightName: generalSettings?.copyrightName,
    adminName: generalSettings?.adminName,
    adminEmail: generalSettings?.adminEmail,
    bank: generalSettings?.bankInfo,
    workingHours: generalSettings?.workingHours,
  };

  // Return data
  return { siteInfo }; // close return
} // close component

// Export
export default useAppSettings;
