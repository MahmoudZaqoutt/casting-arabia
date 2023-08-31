import Loading from "@/components/Shared/Loading/Loading";
import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (router.query.id) {
          const res = await axios.get(
            `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (res) {
            setData(res.data);
          }
        }
      } catch (error) {}
    })();
  }, [router.query.id]);

  const handlePublish = async (e: any) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (router.query.id) {
        const res = await axios.put(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}`,
          {
            title: data?.title,
            company: data?.company,
            productionPersonnel: data?.productionPersonnel,
            productionDescription: data?.productionDescription,
            expirationDate: data?.expirationDate,
            status: data.status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res) {
          setIsLoading(true);
          router.push(`/creator`);
        }
      }
    } catch (error: any) {
      setError(error.response.data.roles);
      console.log(error.response.data.roles);
    }
  };

  return (
    <div className="sm:w-[500px] mx-auto mt-20">
      <p className="text-4xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10">
        Posting an Opportunity
      </p>
      <TitleAndSubTitle
        title="Production company"
        classNameOfTitle="text-2xl mb-3"
        subTitle={data?.title}
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />

      <TitleAndSubTitle
        title="Production company"
        classNameOfTitle="text-2xl mb-3"
        subTitle={data?.company}
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />

      <TitleAndSubTitle
        title="Production Personnel"
        classNameOfTitle="text-2xl mb-3"
        subTitle={data?.productionPersonnel
          .split(",")
          .map((item: any, index: number) => (
            <p key={index} className="my-5 pb-3">
              {item}
              <hr className="!h-[2px] bg-gray-600 my-2" />
            </p>
          ))}
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />

      <TitleAndSubTitle
        title="Production Description"
        classNameOfTitle="text-2xl mb-3"
        subTitle={data?.productionDescription}
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />
      <div className="mb-10">
        <p className="text-2xl mb-3"> Role(s) You're Casting</p>

        <div className="w-full bg-white h-52 rounded-lg border-[1px] border-blue-400">
          <p className="text-xl p-3">Role Name</p>
          {data?.roles.map((item: any, index: number) => (
            <p className="p-3 text-lg mt-2" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <TitleAndSubTitle
        title="Filming Location"
        classNameOfTitle="text-2xl mb-3"
        subTitle={data?.roles[0]?.location}
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />

      <TitleAndSubTitle
        title="When should this listing expire?"
        classNameOfTitle="text-2xl mb-3"
        subTitle={data?.expirationDate.split("T").shift()}
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />

      <div className="flex gap-5 mb-10">
        <button className="text-xl text-blue-600 border-2 border-blue-600 rounded-lg px-3 py-1 duration-200 hover:bg-blue-50 font-semibold">
          Save For Later
        </button>
        {isLoading ? (
          <div className="text-xl text-white border-2 bg-blue-600 border-blue-600 rounded-lg px-3 py-1 duration-200 hover:bg-blue-700 font-semibold">
            <Loading buttonContent="Publish" />
          </div>
        ) : (
          <button
            onClick={handlePublish}
            className="text-xl text-white border-2 bg-blue-600 border-blue-600 rounded-lg px-3 py-1 duration-200 hover:bg-blue-700 font-semibold"
          >
            Publish
          </button>
        )}
      </div>
      {error ? <p className="text-xl text-red-500 mb-5">{error}</p> : ""}
    </div>
  );
};

export default index;
