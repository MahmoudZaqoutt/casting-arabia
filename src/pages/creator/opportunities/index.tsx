import React from "react";
import OpportunitiesPage from "./opportunitiesPage";

const index = ({ MyOpportunities, token }: any) => {
  return <OpportunitiesPage token={token} MyOpportunities={MyOpportunities} />;
};

export default index;

export const getServerSideProps = async (context: any) => {
  const cookies = context.req.headers?.cookie;
  const accessToken = cookies
    ?.split(";")
    ?.find((cookie: any) => cookie?.trim()?.startsWith("token="));
  const token = accessToken?.split("=")[1];

  const res = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const MyOpportunities = await res.json();

  return {
    props: {
      token,
      MyOpportunities: MyOpportunities,
    },
  };
};
