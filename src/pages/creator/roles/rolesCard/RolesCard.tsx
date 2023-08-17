import Image from "next/image";
import React from "react";
import img from "../../../../assets/Rectangle16.png";
import { IPropsCard } from "@/interfaces/props/IPropsCard";
import Link from "next/link";
const RolesCard = (props: IPropsCard) => {
  return (
    <Link href={""}>
      <div className="w-[20.313rem] flex gap-5  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 ">
        <Image src={img} alt="img" className="!w-[50%] " />
        <div className="w-[50%] flex flex-col gap-5 justify-between mt-5 ">
          <p className="font-semibold text-xl">Fulton Waters</p>
          <p className=" text-lg text-gray-400">Review</p>
          <p className="text-xl">No applicants</p>
        </div>
      </div>
    </Link>
  );
};

export default RolesCard;
