import Profile from "@/components/Profile/Profile";
import React, { useEffect, useState } from "react";

const index = ({ profileInfo }: any) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token || "");
  }, []);
  return <Profile profileInfo={profileInfo} />;
};

export default index;

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/me",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY3OCwiaWF0IjoxNjkyODc0Mzg5LCJleHAiOjE3MjQ0MzE5ODl9.JsWpkdxrkyAY8C48EoEr6OLEMXQHFtcDZ0nqqyPrRw0`,
      },
    }
  );
  const profileInfo = await res.json();
  return {
    props: {
      profileInfo: profileInfo,
    },
  };
};
