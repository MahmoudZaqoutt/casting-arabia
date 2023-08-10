import { IPropsTitleAndSubTitle } from "@/interfaces/props/IPropsTitleAndSubTitle";
import React from "react";

const TitleAndSubTitle = (props: IPropsTitleAndSubTitle) => {
  return (
    <div className={props.className}>
      <p className={props.classNameOfTitle}>{props.title}</p>
      <p className={props.classNameOfSubTitle}>{props.subTitle}</p>
    </div>
  );
};

export default TitleAndSubTitle;
