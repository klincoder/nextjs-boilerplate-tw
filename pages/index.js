// Import resources
import React from "react";

// Import custom files
import PageContent from "../src/components/PageContent";
import SectionHero from "../src/components/SectionHero";
import SectionFeatures from "../src/components/SectionFeatures";
import SectionTestimonials from "../src/components/SectionTestimonials";
import SectionCta from "../src/components/SectionCta";
import useAppSettings from "../src/hooks/useAppSettings";

// Component
function Home() {
  // Define app settings
  const { userID } = useAppSettings();

  // Debug
  //console.log("Debug home: ", userID);

  // Return component
  return (
    <PageContent title="Klincoder - Nextjs Boilerplate">
      {/** SECTION - HERO */}
      <SectionHero />

      {/** SECTION - FEATURES */}
      <SectionFeatures />

      {/** SECTION - TESTIMONIALS */}
      <SectionTestimonials />

      {/** SECTION - CTA */}
      <SectionCta />
    </PageContent>
  );
} // close component

// Export
export default Home;
