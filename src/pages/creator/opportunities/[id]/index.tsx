import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      {data.map((item: any, index: number) => (
        <div key={index}>
          {item.id === router.query.id ? <div>{item.status}</div> : ""}
        </div>
      ))}
    </div>
  );
};

export default index;
