import Container from "@/components/Shared/Container/Container";
import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/articles/pub/timeline"
        );
        setData(res.data.data);
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="min-h-[477px] my-20">
      <Container>
        {data.map((item: any, index) => (
          <div key={index}>
            {item.slug === router.query.slug ? (
              <div>
                <TitleAndSubTitle
                  title={item.title}
                  classNameOfTitle="text-2xl font-semibold text-center mb-10"
                />

                <img src={item.imageUrl} alt="img" className="w-full" />
                <div className="flex justify-end text-right ">
                  <TitleAndSubTitle
                    title="2022-11-17"
                    subTitle={item.writtenBy}
                    className="text-sm text-gray-400 italic font-semibold"
                  />
                </div>

                <div
                  className="flex flex-col !text-right  text-xl mt-5 leading-[50px]"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Test;
