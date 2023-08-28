import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import SlidesOfSections from "@/components/SlidesOfSections/SlidesOfSections";
import WhoAreYouSection from "@/components/WhoAreYou/WhoAreYouSection/WhoAreYouSection";
import Header from "@/components/Header/Header";

const index = ({ News }: any) => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setIsAuthorized(true) : setIsAuthorized(false);
  }, []);

  return (
    <>
      <div className="mb-20">
        {/* <WhoAreYouSection /> */}
        <div>
          <SlidesOfSections
            title="My Opportunities"
            id={"MyOpportunities"}
            link=".."
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
          <SlidesOfSections News={News} title="News" id={"News"} href="News" />
          <SlidesOfSections
            News={News}
            title="Learning Center"
            id={"LearningCenter"}
            href="LearningCenter"
          />
        </div>
      </div>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/articles/pub/timeline"
  );
  const News = await res.json();
  return {
    props: {
      News: News,
    },
  };
};
