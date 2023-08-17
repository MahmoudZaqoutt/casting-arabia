import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import Image from "next/image";
import React from "react";
import img from "../../../assets/Rectangle16.png";
import { IPropsChatAccount } from "@/interfaces/props/IPropsChatAccount";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";

const ChatAccount = (props: IPropsChatAccount) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={img}
        alt="img"
        className={`rounded-full w-12 h-12 ${props.ImageClassName}`}
      />
      <div>
        <TitleAndSubTitle
          title="talent talent"
          subTitle="مطلوب عازف عود محترف للمشاركة في عرض | عازف"
          classNameOfTitle="font-semibold text-lg"
          classNameOfSubTitle="text-sm font-semibold text-gray-500"
        />
        {props.list ? (
          <DropDownList
            options={["Connected", "Archived", "Scheduled", "Hired"]}
            className="mt-3 !w-32 !h-10 "
            name={props.status}
            onChange={props.onChange}
            value={props.status}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ChatAccount;
