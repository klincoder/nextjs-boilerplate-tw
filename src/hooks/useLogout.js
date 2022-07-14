// Import resources
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";

// Import custom files

// Component
function useLogout() {
  // Define router
  const router = useRouter();

  // Define alert
  const alert = useAlert();

  // FUNCTIONS
  // HANDLE LOGOUT
  const handleLogout = async () => {
    // Await
    await signOut({ redirect: false, callbackUrl: "/" })
      .then((response) => {
        // Debug
        //console.log("Debug: ", response);
        // Alert succ
        alert.success("Logout successful");
        // Push to login page
        router.replace(response.url);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }; // close fxn

  // Return component
  return { handleLogout }; // close return
} // close component

// Export
export default useLogout;
