// Import resources
import { useRecoilValue } from "recoil";

// Import custom files
import { userAtom, allUsersAtom } from "../recoil/atoms";

// Component
function useLoggedInUser() {
  // Define atom
  const user = useRecoilValue(userAtom);
  const allUsers = useRecoilValue(allUsersAtom);

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

  // Debug
  //console.log("Debug useLoggedInUser: ", user);

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

  // Return component
  return {
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
    handleEmailExist,
    handleUsernameExist,
    handleIsSuperAdminUsername,
  }; // close return
} // close component

// Export
export default useLoggedInUser;
