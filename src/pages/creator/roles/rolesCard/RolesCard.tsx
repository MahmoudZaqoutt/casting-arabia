import React from "react";
import { IPropsCard } from "@/interfaces/props/IPropsCard";
const RolesCard = (props: IPropsCard) => {
  return (
    <div className="w-[18.313rem] flex gap-5  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 ">
      <img src={props.img} alt="img" className="!w-[50%] rounded-xl" />
      <div className=" w-[50%] flex flex-col gap-5 justify-between mt-5 ">
        <p className="font-semibold text-xl overflow-hidden">{props.name}</p>
        <p className=" text-lg text-gray-400 inline-block rounded-xl w-16 hover:bg-gray-50 duration-200">
          Review
        </p>
        <p className="text-xl">No applicants</p>
      </div>
    </div>
  );
};

export default RolesCard;
