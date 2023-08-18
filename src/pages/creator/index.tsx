import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import SlidesOfSections from "@/components/SlidesOfSections/SlidesOfSections";
import WhoAreYouSection from "@/components/WhoAreYou/WhoAreYouSection/WhoAreYouSection";

const index = () => {
  return (
    <div className="mb-20">
      {/* <WhoAreYouSection /> */}
      <div>
        <SlidesOfSections
          title="My Opportunities"
          id={"MyOpportunities"}
          link="link"
          MyOpportunities={true}
        />
        <SlidesOfSections
          title="My Roles"
          id={"MyRoles"}
          href="creator/roles"
          myRoles={true}
        />
        {/* <SlidesOfSections
          title="Opportunities"
          id={"Opportunities"}
          paid="p"
          Icon="i"
          buttonContent="Show More"
        /> */}
        <SlidesOfSections News title="News" id={"News"} href="News" />
        <SlidesOfSections
          LearningCenter
          title="Learning Center"
          id={"LearningCenter"}
          href="LearningCenter"
        />
      </div>
    </div>
  );
};

export default index;
