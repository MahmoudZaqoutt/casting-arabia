import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import img from "../../../../assets/Rectangle16.png";
import { IPropsCard } from "@/interfaces/props/IPropsCard";

const ReviewCard = (props: IPropsCard) => {
  return (
    <div>
      <Image alt="" src={img} className="w-full h-80" />
      <div className="bg-white px-3 -mt-2 !rounded-b-2xl">
        <TitleAndSubTitle
          title="talent"
          className="my-2"
          classNameOfTitle="font-semibold text-2xl"
        />

        {props.status ? (
          <div className="flex items-center gap-2 !w-[40%]  px-4 py-1 rounded-full border-[1px] border-red-500 text-red-600 ">
            <BsFillXCircleFill />
            <p>Archived</p>
          </div>
        ) : (
          <div className="flex items-center gap-2 !w-[45%]  px-4 py-1 rounded-full border-[1px] border-green-500 text-green-600 ">
            <BsFillCheckCircleFill />
            <p>Connected</p>
          </div>
        )}

        <div className="flex justify-between m-5">
          <TitleAndSubTitle
            title="Gender"
            subTitle="female"
            classNameOfTitle="text-lg text-[#959ed9]"
          />
          <TitleAndSubTitle
            title="Age"
            subTitle="20"
            classNameOfTitle="text-lg text-[#959ed9]"
          />
          <TitleAndSubTitle
            title="Location"
            subTitle="N/A"
            classNameOfTitle="text-lg text-[#959ed9]"
          />
        </div>

        <Link href={"/admin/staffs/profile"}>
          <p className="text-center text-xl font-semibold pb-5 text-blue-700 hover:bg-yellow-50 pt-2 duration-200">
            View Full Profile
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
