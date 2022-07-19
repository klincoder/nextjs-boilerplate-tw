// Import resources
import React from "react";
import { getSession } from "next-auth/react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages, baseUrl } from "../../src/config/data";

// Component
function Cms() {
  // Debug
  //console.log("Debug cms: ",);

  // Return component
  return (
    <CmsContent title="Dashboard">
      {/** Section 1 */}
      <div className="">
        <h1 className="font-bols">CMS Dashboard</h1>
        <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra mauris eu ipsum gravida, sit amet commodo nisi pellentesque.
          Vestibulum luctus fermentum nulla sed consequat. Maecenas at pretium
          nibh, sed lobortis velit. Nulla eu libero eget massa aliquam dignissim
          sed ut metus. Donec arcu felis, faucibus eget ex id, egestas egestas
          arcu. Mauris bibendum tempus erat, sit amet venenatis nulla accumsan
          eu. Mauris scelerisque erat et tellus faucibus lobortis. Vestibulum
          eleifend orci sapien, quis tempus elit lobortis finibus. Aenean
          ullamcorper sagittis fermentum. Etiam hendrerit malesuada odio, a
          ultricies lectus fermentum at. Nullam ut tempus mauris. Etiam ornare
          magna non est gravida luctus. Ut venenatis rutrum massa maximus
          ullamcorper. Praesent turpis tortor, dictum in venenatis non,
          fringilla sed ante. Nam elementum blandit magna. Praesent libero nunc,
          ornare non enim non, efficitur condimentum dui.
        </p>
        <p className="mb-3">
          Aliquam id felis sem. Nunc finibus, sem quis interdum fringilla, augue
          tellus posuere libero, eget vestibulum ex sem in magna. Nulla feugiat
          vitae nulla a placerat. Mauris vitae massa non ligula efficitur
          molestie ut ut nisl. Praesent ullamcorper a eros et rhoncus. Praesent
          semper varius aliquam. Vestibulum nisi ligula, hendrerit at
          ullamcorper vitae, scelerisque vitae turpis.
        </p>
        <p className="mb-3">
          Quisque vel erat ac felis interdum fermentum vel quis dolor. Aenean
          vel sem at erat aliquam efficitur. Etiam tristique dui vel enim
          luctus, eget sagittis leo ultricies. Nam sit amet felis vulputate,
          rhoncus nisi eget, congue risus. Ut scelerisque justo sit amet feugiat
          faucibus. Nullam sit amet magna nibh. Ut vel libero ultrices, egestas
          mi a, accumsan massa. Donec elementum, odio aliquet sollicitudin
          condimentum, mi urna dictum nisl, in ultrices lectus augue sed massa.
          Nunc at posuere ante. Pellentesque euismod sapien risus. Phasellus
          viverra libero et facilisis pretium. Sed tincidunt lacus vel semper
          ullamcorper. Fusce imperdiet vel nulla nec elementum.
        </p>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default Cms;

// GET SEVERSIDE PROPS
export async function getServerSideProps(context) {
  // Get session
  const session = await getSession(context);
  // If no session, redirect
  if (!session) {
    return {
      redirect: {
        destination: `/login?callbackUrl=${baseUrl}/cms`,
        permanent: false,
      }, // close redirect
    }; // close return
  } // close if !session

  // Return props
  return {
    props: {
      currSession: session ? session : null,
    }, // close props
  }; // close return
} // close getServerSide
