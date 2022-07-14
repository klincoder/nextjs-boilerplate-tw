// Import resources
import { useAlert } from "react-alert";

// Import custom files
import { handleFileValidation } from "../config/appConfig";
import {
  fireStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "../config/firebase";

// Component
function useCustomFirebase() {
  // Define alert
  const alert = useAlert();

  // Debug
  //console.log("Debug useCustomFirebase: ");

  // FUNCTIONS
  // HANDLE UPLOAD FILE
  const handleUploadFile = async (fileInput, username, folder) => {
    // If empty args, return null
    if (!fileInput || !username) return null;
    // Define file validations
    folder = folder || "general";
    const fileInfo = handleFileValidation(fileInput, username);
    const fileName = fileInfo?.newFileName;
    // If fileInfo === false
    if (fileInfo?.isValid === false) {
      alert.error(fileInfo?.msg);
      return fileInfo?.isValid;
    } // close if
    // Upload file
    // Create storage ref
    const storageRef = ref(fireStorage, `/${folder}/${fileName}`);
    const uploadTask = await uploadBytesResumable(storageRef, fileInput);
    const url = await getDownloadURL(uploadTask.ref);
    // Return and await url
    //console.log("Debug fxnUploadUrl: ", getUrl);
    return { fileName, url };
    //return await getDownloadURL(uploadTask.ref);
  }; // close fxn

  // Return component
  return { handleUploadFile }; // close return
} // close component

// Export
export default useCustomFirebase;
