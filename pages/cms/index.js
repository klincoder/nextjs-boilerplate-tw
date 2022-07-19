// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import CmsContent from "../../src/components/CmsContent";
import { appImages } from "../../src/config/data";

// Component
function Cms() {
  // Debug
  //console.log("Debug cms: ",)

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
        <p className="mb-3">
          Quisque tincidunt porta pellentesque. Donec sed ligula interdum,
          congue ipsum molestie, tempor arcu. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Suspendisse condimentum magna accumsan
          purus auctor, sed facilisis erat dictum. Nam semper dui eget vulputate
          faucibus. In quis interdum purus. Sed vitae nisl vel mi laoreet
          suscipit. Aliquam commodo hendrerit sapien, eget consequat dui
          hendrerit auctor. Praesent placerat, elit non commodo dapibus, sapien
          nisl semper mauris, non suscipit est tellus eget diam. Integer non
          dictum mi. In a blandit neque. Vivamus auctor velit ac odio ultrices,
          quis volutpat metus interdum. Phasellus neque tortor, eleifend a nunc
          vel, ultricies pretium dui. Proin ac enim hendrerit, pellentesque erat
          a, tincidunt lectus.
        </p>
        <p className="mb-3">
          Phasellus nunc nisi, eleifend non rhoncus vitae, congue sit amet diam.
          Curabitur ut elit sed ante ornare euismod sed efficitur eros. Ut a leo
          ac neque venenatis tincidunt sit amet ac nulla. Nulla ac lacus at
          nulla ullamcorper luctus vitae id nibh. Sed nec lacus id augue ornare
          mollis nec eu massa. Mauris massa tortor, posuere eget felis quis,
          laoreet maximus diam. Cras vel tortor dolor. Vestibulum laoreet
          malesuada iaculis. Fusce tincidunt ligula a vulputate volutpat. Cras
          pretium turpis est, et tincidunt enim auctor a.
        </p>
      </div>
    </CmsContent>
  ); // close return
} // close component

// Export
export default Cms;
