import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import React from "react";

const index = () => {
  return (
    <div className="sm:w-[500px] mx-auto mt-20">
      <p className="text-4xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10">
        Posting an Opportunity
      </p>
      <TitleAndSubTitle
        title="Production company"
        classNameOfTitle="text-2xl mb-3"
        subTitle="hello"
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />

      <TitleAndSubTitle
        title="Production company"
        classNameOfTitle="text-2xl mb-3"
        subTitle="hello"
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />

      <TitleAndSubTitle
        title="Production company"
        classNameOfTitle="text-2xl mb-3"
        subTitle="hello"
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />

      <TitleAndSubTitle
        title="Production company"
        classNameOfTitle="text-2xl mb-3"
        subTitle="hello"
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />
      <div className="mb-10">
        <p className="text-2xl mb-3"> Role(s) You're Casting</p>

        <div className="w-full bg-white h-52 rounded-lg border-[1px] border-blue-400"></div>
      </div>

      <TitleAndSubTitle
        title="Production company"
        classNameOfTitle="text-2xl mb-3"
        subTitle="hello"
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />

      <TitleAndSubTitle
        title="Production company"
        classNameOfTitle="text-2xl mb-3"
        subTitle="hello"
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      />
      <hr className="!h-[2px] bg-gray-600 mb-12" />

      <div className="flex gap-5 mb-10">
        <button className="text-xl text-blue-600 border-2 border-blue-600 rounded-lg px-3 py-1 duration-200 hover:bg-blue-50 font-semibold">
          Save For Later
        </button>
        <button className="text-xl text-white border-2 bg-blue-600 border-blue-600 rounded-lg px-3 py-1 duration-200 hover:bg-blue-700 font-semibold">
          Publish
        </button>
      </div>
    </div>
  );
};

export default index;
