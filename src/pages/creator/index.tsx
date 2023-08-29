import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import SlidesOfSections from "@/components/SlidesOfSections/SlidesOfSections";
import WhoAreYouSection from "@/components/WhoAreYou/WhoAreYouSection/WhoAreYouSection";
import Header from "@/components/Header/Header";

const index = ({ News, myRoles }: any) => {
  return (
    <>
      <div className="mb-20">
        {/* <WhoAreYouSection /> */}
        <div>
          <SlidesOfSections
            title="My Opportunities"
            id={"MyOpportunities"}
            link=".."
            href="/creator/opportunities"
            MyOpportunities={true}
          />
          <SlidesOfSections
            title="My Roles"
            id={"MyRoles"}
            href="creator/roles"
            myRoles={myRoles}
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

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/articles/pub/timeline"
  );

  const res2 = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/roles?page=0&limit=9",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY3OCwiaWF0IjoxNjkyODc0Mzg5LCJleHAiOjE3MjQ0MzE5ODl9.JsWpkdxrkyAY8C48EoEr6OLEMXQHFtcDZ0nqqyPrRw0`, // Your token here
      },
    }
  );

  const myRoles = await res2.json();
  const News = await res.json();

  return {
    props: {
      News: News,
      myRoles: myRoles,
    },
  };
};
