import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import React from "react";

const DetailsTab = () => {
  return (
    <div>
      <p className="text-2xl font-semibold my-8">Characteristics</p>

      <div className="text-xl font-semibold grid grid-cols-2 sm:grid-cols-3 gap-5 mb-8">
        <TitleAndSubTitle
          title="Eyes colors:"
          subTitle="Blue"
          className="flex gap-2"
          classNameOfTitle="text-[#a3b8c6]"
          classNameOfSubTitle=""
        />
        <TitleAndSubTitle
          title="Hair color:"
          subTitle="Blond"
          className="flex gap-2"
          classNameOfTitle="text-[#a3b8c6]"
          classNameOfSubTitle=""
        />
        <TitleAndSubTitle
          title="Weight:"
          subTitle=" 888 Kg"
          className="flex gap-2"
          classNameOfTitle="text-[#a3b8c6]"
          classNameOfSubTitle=""
        />
        <TitleAndSubTitle
          title="Height:"
          subTitle="555 Cm"
          className="flex gap-2"
          classNameOfTitle="text-[#a3b8c6]"
          classNameOfSubTitle=""
        />
        <TitleAndSubTitle
          title="Citizenship:"
          subTitle="AF"
          className="flex gap-2"
          classNameOfTitle="text-[#a3b8c6]"
          classNameOfSubTitle=""
        />
        <TitleAndSubTitle
          title="Is union member?:"
          subTitle="Yes"
          className="flex gap-2"
          classNameOfTitle="text-[#a3b8c6]"
          classNameOfSubTitle=""
        />
        <TitleAndSubTitle
          title="Has driving license?:"
          subTitle="Yes"
          className="flex gap-2"
          classNameOfTitle="text-[#a3b8c6]"
          classNameOfSubTitle=""
        />
      </div>
      <hr className="h-[3px] bg-[#a3b8c6] mb-10" />

      <p className="text-2xl font-semibold my-8">Education & Training</p>

      <div className="bg-[#a3b8c6] rounded-xl min-h-20 py-4 text-xl font-semibold flex flex-col sm:flex-row justify-around items-center">
        <p>Institution </p>
        <p>Education Level / Program / License </p>
        <p>City, Graduation Year </p>
      </div>
      <hr className="h-[3px] bg-[#a3b8c6] my-10" />
      <p className="text-2xl font-semibold my-8">Credits</p>

      <div className="bg-[#a3b8c6] rounded-xl min-h-14 py-4 text-xl font-semibold flex flex-col sm:flex-row justify-around items-center mb-20">
        <p>Project </p>
        <p>Role</p>
        <p>Director / Company, Location, Date</p>
      </div>
    </div>
  );
};

export default DetailsTab;
