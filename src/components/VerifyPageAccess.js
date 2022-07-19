// Import resources
import { useRouter } from "next/router";

// Import custom files
import CustomButton from "../components/CustomButton";
import { adminNavLinks, userNavLinks } from "../config/data";
import { handleGetUserRoutes } from "../config/functions";
import PageAccessItem from "./PageAccessItem";

// Component
function VerifyPageAccess({ currSession, pageAccess, children }) {
  // Define user role
  const userRole = currSession?.role;

  // Define router
  const router = useRouter();
  const currRoute = router.pathname;

  // Get user routes
  const userRoutes = handleGetUserRoutes(userNavLinks, currRoute);
  const adminRoutes = handleGetUserRoutes(adminNavLinks, currRoute);

  // Define user page access
  // Check if currSession && userRoutes includes currRoute && userRole === pageAccess
  const isUserAccess =
    currSession && userRoutes?.isValid && userRole === pageAccess;
  const isAdminAccess =
    currSession && adminRoutes?.isValid && userRole === pageAccess;

  // Debug
  //console.log("Debug verifyPageAccess: ",);

  // FUNCTIONS
  // HANDLE VERIFY PAGE ACCESS
  const handleVerifyPageAccess = () => {
    // If isUserAccess
    if (isUserAccess) {
      return <>{children}</>;
    } else if (isAdminAccess) {
      return <>{children}</>;
    } else {
      return <PageAccessItem />;
    } // close if
  }; // close fxn

  // Return component
  return <>{handleVerifyPageAccess()}</>; // close return
} // close component

// Export
export default VerifyPageAccess;
