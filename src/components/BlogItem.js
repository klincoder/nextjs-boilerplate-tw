// Import resources
import React from "react";
import { appImages } from "../config/data";
import { handleFormatDate, handleSliceString } from "../config/functions";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";

// Component
function BlogItem({ rowData, index }) {
  // Define rowData info
  const rowID = rowData?.id;
  const rowTitle = rowData?.title;
  const rowImage = rowData?.titleImage;
  const rowContent = rowData?.content;
  const rowAuthor = rowData?.author;
  const rowSlug = rowData?.slug;
  const rowExcerpt = handleSliceString(rowContent, 0, 150);
  const rowDatePublished = handleFormatDate(rowData?.datePublished);

  // Debug
  //console.log("Debug blogItem: ",)

  // Return component
  return (
    <div className="mb-6 lg:mb-0">
      <div className="relative block bg-white rounded-lg shadow-lg">
        {/** Header */}
        <div className="flex">
          {/** Image */}
          <div
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
          >
            <CustomImage
              image={rowImage || appImages?.general}
              imgClass="w-full"
              width={800}
              height={500}
            />
            {/** Link */}
            {/* <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style="background-color: rgba(251, 251, 251, 0.15)"
              ></div>
            </a> */}
          </div>
        </div>

        {/** Content */}
        <div className="p-6">
          {/** Title */}
          <h5 className="font-bold text-lg mb-3">{rowTitle}</h5>
          {/** Meta */}
          <p className="text-gray-500 mb-4">
            <small>
              Published <span>{rowDatePublished}</span> by{" "}
              <CustomButton isLink href={`/`}>
                <a className="text-gray-900">{rowAuthor}</a>
              </CustomButton>
            </small>
          </p>
          {/** Excerpt */}
          <p className="mb-4 pb-2">{rowExcerpt}</p>
          {/** Read more */}
          <CustomButton isLink href={`/blog/${rowSlug}`}>
            <a
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className={tw?.btnPrimary}
            >
              Read more
            </a>
          </CustomButton>
        </div>
      </div>
    </div>
  ); // close return
} // close component

// Export
export default BlogItem;
