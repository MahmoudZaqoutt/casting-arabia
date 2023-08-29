import React from "react";
import RolesPage from "./RolesPage";

const index = ({ myRoles }: any) => {
  return <RolesPage myRoles={myRoles} />;
};

export default index;

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/roles?page=0",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY3OCwiaWF0IjoxNjkyODc0Mzg5LCJleHAiOjE3MjQ0MzE5ODl9.JsWpkdxrkyAY8C48EoEr6OLEMXQHFtcDZ0nqqyPrRw0`, // Your token here
      },
    }
  );
  const myRoles = await res.json();

  return {
    props: {
      myRoles: myRoles,
    },
  };
};
