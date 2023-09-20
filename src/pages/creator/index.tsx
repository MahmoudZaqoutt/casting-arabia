import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import SlidesOfSections from "@/components/SlidesOfSections/SlidesOfSections";
import WhoAreYouSection from "@/components/WhoAreYou/WhoAreYouSection/WhoAreYouSection";

const index = ({ News, myRoles, MyOpportunities, token }: any) => {
  console.log(token);
  return (
    <>
      <div className="mb-20">
        {/* <WhoAreYouSection /> */}
        <div>
          <SlidesOfSections
            {...{ token }}
            title="My Opportunities"
            id={"MyOpportunities"}
            link=".."
            href="/creator/opportunities"
            MyOpportunities={MyOpportunities}
          />
          <SlidesOfSections
            {...{ token }}
            title="My Roles"
            id={"MyRoles"}
            href="creator/roles"
            myRoles={myRoles}
          />

          <SlidesOfSections
            {...{ token }}
            News={News}
            title="News"
            id={"News"}
            href="news"
          />
          <SlidesOfSections
            {...{ token }}
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

export const getServerSideProps = async (context: any) => {
  const cookies = context.req.headers?.cookie;
  const accessToken = cookies
    ?.split(";")
    ?.find((cookie: any) => cookie?.trim()?.startsWith("token="));
  const token = accessToken?.split("=")[1];

  const res1 = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/articles/pub/timeline"
  );

  const res2 = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/roles?page=0&limit=9",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const res3 = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const News = await res1.json();
  const myRoles = await res2.json();
  const MyOpportunities = await res3.json();

  return {
    props: {
      token,
      News: News,
      myRoles: myRoles,
      MyOpportunities: MyOpportunities,
    },
  };
};
