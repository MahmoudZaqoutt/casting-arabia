import { IPropsTopHeaderList } from "@/interfaces/props/IPropsTopHeaderList";
import Link from "next/link";
import React from "react";

export const List = (props: IPropsTopHeaderList) => {
  return (
    <ul className={props.className}>
      {props.options.map((option, index) => (
        <>
          {option.modal === "modal" ? (
            <li>{option.content}</li>
          ) : (
            <Link href={option.href} key={index}>
              <li className={option.classNameOfLI}>{option.content}</li>
            </Link>
          )}
        </>
      ))}
    </ul>
  );
};
