import Image from "next/image";
import React from "react";
import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import { AiOutlineCheck } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";

import img from "../../../assets/Rectangle16.png";
import { IPropsCard } from "@/interfaces/props/IPropsCard";
import Select from "./Select/Select";
const OpportunitiesCard = (props: IPropsCard) => {
  return (
    // w-[20.313rem]
    <div className=" max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 ">
      <img src={props.img} alt="img" className="w-full h-[10rem] rounded-xl" />
      <div className="flex flex-col gap-5 justify-between mt-5 h-auto">
        <div className="flex items-center justify-between">
          <TitleAndSubTitle
            title={props.title}
            subTitle={props.subTitle}
            classNameOfTitle="font-semibold"
            classNameOfSubTitle="text-sm text-gray-500"
          />
          <Select />
        </div>

        <div>
          {props.status === "draft" ? (
            <div className="flex items-center gap-2 ">
              <BiSolidPencil className="text-2xl text-yellow-500" />
              <p className="text-lg text-blue-600">Draft</p>
            </div>
          ) : (
            <div className="flex items-center gap-2 ">
              <AiOutlineCheck className="text-2xl text-green-500" />
              <p className="text-lg text-blue-600">Published</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 overflow-x-hidden hover:overflow-x-scroll">
          <p className=" border-2  border-gray-300 px-6 py-1 rounded-full text-gray-600">
            Connected(0)
          </p>

          <p className=" border-2  border-gray-300 px-6 py-1 rounded-full text-gray-600">
            Archives(0)
          </p>
          <p className=" border-2  border-gray-300 px-6 py-1 rounded-full text-gray-600">
            Pending(0)
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
