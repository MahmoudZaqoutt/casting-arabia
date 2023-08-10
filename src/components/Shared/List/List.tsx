import { IPropsTopHeaderList } from "@/interfaces/props/IPropsTopHeaderList";
import Link from "next/link";
import React, { Fragment } from "react";
export const List = (props: IPropsTopHeaderList) => {
  return (
    <ul className={props.className}>
      {props.options.map((option: any, index) => (
        <Fragment key={index}>
          {option.modal === "modal" ? (
            <li>{option.content}</li>
          ) : (
            <Link href={option.href}>
              <li className={option.classNameOfLI}>{option.content}</li>
            </Link>
          )}
        </Fragment>
      ))}
    </ul>
  );
};
