// Import resources
import moment from "moment";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import { useRecoilValue } from "recoil";

// Import custom files
import { handleFormatDate } from "../config/functions";
import { allUsersAtom, appSettingsAtom, userAtom } from "../recoil/atoms";

// Compnent
function useAppSettings() {
  // Define atom
  const allSettings = useRecoilValue(appSettingsAtom);
  const user = useRecoilValue(userAtom);
  const allUsers = useRecoilValue(allUsersAtom);

  // Define router
  const router = useRouter();

  // Define alert
  const alert = useAlert();

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

  // Define user info
  const userID = user?.userID;
  const username = user?.username;
  const walletBal = user?.walletBal;
  const earningsBal = user?.earningsBal;
  const userFullName = user?.fullName;
  const userEmail = user?.emailAddress;
  const userPhone = user?.phoneNumber;
  const userRole = user?.role;
  const userAvatar = user?.avatar;
  const userBankAcct = user?.bankAcct;
  const userBankName = user?.bankName;
  const userBankCode = user?.bankCode;
  const userBankHolder = user?.bankHolder;
  const userStoreDesc = user?.storeDesc;
  const userSocialLinks = user?.socialLinks;
  const isAdmin = userRole === "admin";

  // Define todays date
  const todaysDate = moment.utc().format();
  const todaysDate1 = handleFormatDate(todaysDate, 1);
  const todaysDate2 = handleFormatDate(todaysDate, 2);

  // Debug
  //console.log("Debug useApp Settings: ", user);

  // FUNCTIONS
  // HANDLE EMAIL EXIST
  const handleEmailExist = (emailAddr) => {
    // If empty args, return
    if (!emailAddr) return;
    // Filter email addr
    const filterEmailAddr = allUsers?.filter(
      (item) => item?.emailAddress === emailAddr
    );
    // Define data
    const isValid = filterEmailAddr?.length > 0;
    const data = filterEmailAddr[0];
    // Return
    return { isValid, data };
  }; // close fxn

  // HANDLE USERNAME EXIST
  const handleUsernameExist = (username) => {
    // If empty args, return
    if (!username) return;
    // Filter username
    const filterUsername = allUsers?.filter(
      (item) => item?.username === username
    );
    // Define data
    const isValid = filterUsername?.length > 0;
    const data = filterUsername[0];
    // Return
    return { isValid, data };
  }; // close fxn

  // HANDLE IS SUPER ADMIN USERNAME
  const handleIsSuperAdminUsername = () => {
    // If empty args, return
    if (!username) return false;
    const isValid = username?.toLowerCase() === "klincoder";
    return isValid;
  }; // close fxn

  // HANDLE LOGOUT
  const handleLogout = async () => {
    // Return and await
    return await signOut({ redirect: false, callbackUrl: "/" })
      .then((apiRes) => {
        // Debug
        //console.log("Debug handleLogout: ", apiRes);
        // Alert succ
        alert.success("Logout successful");
        // Push to login page
        router.replace(apiRes?.url);
      })
      .catch((err) => {
        console.log("Debug handleLogout: ", err.message);
      });
  }; // close fxn

  // Return data
  return {
    siteInfo,
    userID,
    username,
    walletBal,
    earningsBal,
    userFullName,
    userEmail,
    userPhone,
    userRole,
    userAvatar,
    userBankAcct,
    userBankName,
    userBankCode,
    userBankHolder,
    userStoreDesc,
    userSocialLinks,
    isAdmin,
    todaysDate,
    todaysDate1,
    todaysDate2,
    handleEmailExist,
    handleUsernameExist,
    handleIsSuperAdminUsername,
    handleLogout,
  }; // close return
} // close component

// Export
export default useAppSettings;
