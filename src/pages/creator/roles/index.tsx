import React from "react";
import RolesPage from "./RolesPage";

const index = ({ myRoles }: any) => {
  return <RolesPage myRoles={myRoles} />;
};

export default index;

export const getServerSideProps = async (context: any) => {
  const cookies = context.req.headers?.cookie;
  const accessToken = cookies
    ?.split(";")
    ?.find((cookie: any) => cookie?.trim()?.startsWith("token="));
  const token = accessToken?.split("=")[1];

  const res = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/roles?page=0",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const myRoles = await res.json();

  return {
    props: {
      token,
      myRoles: myRoles,
    },
  };
};
