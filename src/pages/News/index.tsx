import React from "react";
import NewsPage from "./NewsPage";

const index = ({ News }: any) => {
  return (
    <div>
      <NewsPage News={News} />
    </div>
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
