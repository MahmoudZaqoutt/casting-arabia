import { IPropsCard } from "@/interfaces/props/IPropsCard";
import React from "react";

const Option = (props: IPropsCard) => {
  return (
    <div className="flex items-center gap-2 text-md">
      {props.Icon}
      <p>{props.content}</p>
    </div>
  );
};

export default Option;
