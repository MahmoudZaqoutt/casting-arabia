import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import SlidesOfSections from "@/components/SlidesOfSections/SlidesOfSections";
import WhoAreYouSection from "@/components/WhoAreYou/WhoAreYouSection/WhoAreYouSection";

const index = ({ News }: any) => {
  return (
    <>
      <div className="mb-20">
        <WhoAreYouSection />
        <div>
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
