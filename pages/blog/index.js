// Import resources
import React from "react";

// Import custom files
import tw from "../../src/styles/twStyles";
import PageContent from "../../src/components/PageContent";
import BlogItem from "../../src/components/BlogItem";
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
function Blog({ allPosts }) {
  // Define all posts length
  const allPostsLen = allPosts?.length;

  // Debug
  //console.log("Debug blog: ", allPostsLen);

  // Return component
  return (
    <PageContent title="Blog">
      {/** SECTION - PAGE DETAILS */}
      <section id="Blog" className="bg-white">
        {/** CONTAINER */}
        <div className="container flex flex-col gap-6 mx-auto px-4 py-24 md:flex-row md:space-y-0">
          {/** COL 1 - POSTS */}
          <div className="grid gap-6 mb-6 lg:grid-cols-3 xl:gap-x-12">
            {/** Loop allPosts */}
            {allPostsLen > 0 ? (
              allPosts?.map((item, index) => (
                <BlogItem key={item?.id} rowData={item} index={index} />
              ))
            ) : (
              <div>No posts found</div>
            )}
          </div>

          {/** COL 2 */}
          <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
            <p>Col 2</p>
          </div>

          {/** Close container */}
        </div>
      </section>
    </PageContent>
  ); // close return
} // close component

// Export
export default Blog;

// GET STATIC PROPS - PRE-FETCH DYNAMIC CONTENT
export async function getStaticProps() {
  // Get all active blog posts
  const allPostsRef = query(
    collection(fireDB, "blogPosts"),
    where("status", "==", "active")
  );
  const allPostsSnap = await getDocs(allPostsRef);
  const allPostsData =
    allPostsSnap.size > 0 &&
    allPostsSnap.docs.map((doc) => {
      return doc.data();
    });

  // Return props
  return {
    props: {
      allPosts: allPostsData,
    }, // close props
  }; // close return
} // close getStaticProps
