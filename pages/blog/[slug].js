// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import PageContent from "../../src/components/PageContent";
import { appImages } from "../../src/config/data";
import {
  fireDB,
  query,
  getDocs,
  doc,
  where,
  collection,
} from "../../src/config/firebase";

// Component
function BlogDetails({ selectedPost }) {
  // Debug
  //console.log("Debug blogDetails: ",)

  // Return component
  return (
    <PageContent title="Blog Details">
      {/** SECTION - PAGE DETAILS */}
      <section id="blogDetails" className="bg-white">
        {/** CONTAINER */}
        <div className="container flex mx-auto px-4 py-24 md:flex-row md:space-y-0">
          {/** COL 1 */}
          <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
            <p>Col 1</p>
          </div>

          {/** COL 2 */}
          <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
            <p>Col 2</p>
          </div>
        </div>
      </section>
    </PageContent>
  ); // close return
} // close component

// Export
export default BlogDetails;

// GET STATIC PATHS - TO INFORM NEXTJS OF POSSIBLE DYNAMIC ROUTES
export async function getStaticPaths() {
  // Get all blog posts slug
  const allPostsRef = collection(fireDB, "blogPosts");
  const allPostsSnap = await getDocs(allPostsRef);
  const allPostsData =
    allPostsSnap.size > 0 &&
    allPostsSnap.docs.map((doc) => {
      return {
        params: { slug: doc.data().slug },
      };
    });

  // Return paths
  return {
    paths: allPostsData,
    fallback: false,
  }; // close return
} // close getStaticPaths

// GET STATIC PROPS - PRE-FETCH DYNAMIC CONTENT
export async function getStaticProps({ params }) {
  // Get selected post details
  const selectedPostRef = query(
    collection(fireDB, "blogPosts"),
    where("slug", "==", `${params.slug}`)
  );
  const selectedPostSnap = await getDocs(selectedPostRef);
  const selectedPostData =
    selectedPostSnap.size > 0 &&
    selectedPostSnap.docs.map((doc) => {
      return doc.data();
    });

  // Return props
  return {
    props: {
      selectedPost: selectedPostData,
    }, // close props
  }; // close return
} // close getStaticProps
