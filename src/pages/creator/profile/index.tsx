import Profile from "@/components/Profile/Profile";
import React from "react";

const index = ({ profileInfo, token }: any) => {
  return <Profile profileInfo={profileInfo} {...{ token }} />;
};

export default index;

export const getServerSideProps = async (context: any) => {
  const cookies = context.req.headers?.cookie;
  const accessToken = cookies
    ?.split(";")
    ?.find((cookie: any) => cookie?.trim()?.startsWith("token="));
  const token = accessToken?.split("=")[1];

  const res = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const profileInfo = await res.json();
  return {
    props: {
      token,
      profileInfo: profileInfo,
    },
  };
};
