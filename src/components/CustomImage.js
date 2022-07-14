// Import resources
import React from "react";
import Image from "next/image";

// Import custom files
import tw from "../styles/twStyles";

// Component
function CustomImage({ image, alt, imgClass, ...rest }) {
  // Debug
  //console.log("Debug CustomImage: ",)

  // Return component
  return <Image src={image} alt={alt} className={imgClass} {...rest} />; // close return
} // close component

// Export
export default CustomImage;
