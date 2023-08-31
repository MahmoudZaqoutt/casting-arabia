import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import SlidesOfSections from "@/components/SlidesOfSections/SlidesOfSections";
import WhoAreYouSection from "@/components/WhoAreYou/WhoAreYouSection/WhoAreYouSection";
import Header from "@/components/Header/Header";

const index = ({ News, myRoles, MyOpportunities }: any) => {
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
            MyOpportunities={MyOpportunities}
          />
          <SlidesOfSections
            title="My Roles"
            id={"MyRoles"}
            href="creator/roles"
            myRoles={myRoles}
          />

          <SlidesOfSections News={News} title="News" id={"News"} href="news" />
          <SlidesOfSections
            News={News}
            title="Learning Center"
            id={"LearningCenter"}
            href="learningCenter"
          />
        </div>
      </div>
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  const res1 = await fetch(
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

  const res3 = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY3OCwiaWF0IjoxNjkyODc0Mzg5LCJleHAiOjE3MjQ0MzE5ODl9.JsWpkdxrkyAY8C48EoEr6OLEMXQHFtcDZ0nqqyPrRw0`, // Your token here
      },
    }
  );
  const News = await res1.json();
  const myRoles = await res2.json();
  const MyOpportunities = await res3.json();

  return {
    props: {
      News: News,
      myRoles: myRoles,
      MyOpportunities: MyOpportunities,
    },
  };
};
