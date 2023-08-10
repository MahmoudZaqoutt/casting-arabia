import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import SlidesOfSections from "@/components/SlidesOfSections/SlidesOfSections";
import WhoAreYouSection from "@/components/WhoAreYou/WhoAreYouSection/WhoAreYouSection";
const index = () => {
  return (
    <>
      <WhoAreYouSection />
      <div>
        <SlidesOfSections
          title="Opportunities"
          id={"Opportunities"}
          paid="p"
          Icon="i"
          buttonContent="Show More"
        />
        <SlidesOfSections title="News" id={"News"} href="News" />
        <SlidesOfSections
          title="Learning Center"
          id={"LearningCenter"}
          href="LearningCenter"
        />
        {/* <SlidesOfSections
          title="Learning Center"
          id={"LearningCenter"}
          href="LearningCenter"
        /> */}
      </div>
    </>
  );
};

export default index;
