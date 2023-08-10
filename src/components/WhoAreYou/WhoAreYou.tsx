import React from "react";
import TitleAndSubTitle from "../Shared/TitleAndSubTitle/TitleAndSubTitle";
import Link from "next/link";
import Container from "../Shared/Container/Container";
import { IPropsWhoAreYou } from "@/interfaces/props/IPropsWhoAreYou";
const WhoAreYou = (props: IPropsWhoAreYou) => {
  return (
    <Container>
      <section
        className={`flex flex-col md:flex-row  gap-5 md:gap-12 mt-5 bg-white px-7 md:px-12 py-6 rounded-3xl h-[36rem] sm:h-[30rem] md:h-auto ${props.className} `}
      >
        <TitleAndSubTitle
          title={props.title}
          classNameOfTitle="text-blue-700 text-2xl font-bold"
          className="md:hidden"
        />
        <video controls className="rounded-2xl h-56 w-full md:w-[390px] ">
          <source src={props.src} type="video/mp4" />
        </video>

        <div className="flex flex-col gap-3 md:gap-7">
          <TitleAndSubTitle
            title={props.title}
            subTitle={props.subTitle}
            classNameOfTitle="text-blue-700 text-3xl font-bold hidden md:!block"
            classNameOfSubTitle="text-blue-600 text-md md:mt-5"
          />
          <Link href={`/${props.href}`}>
            <p className="bg-blue-500 inline-block w-[10rem] text-center text-md text-white p-3 rounded-xl hover:bg-opacity-90 ease-in-out duration-150">
              {props.link}
            </p>
          </Link>
        </div>
      </section>
    </Container>
  );
};
export default WhoAreYou;
