import Container from "@/components/Shared/Container/Container";
import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import { ABOUT_US } from "@/constants/aboutUs";
import React from "react";

const index = () => {
  return (
    <Container>
      <div className="mt-12 bg-white p-6 rounded-xl shadow-xl mb-7">
        {ABOUT_US.map((item: any, index) => (
          <TitleAndSubTitle
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            classNameOfTitle="text-2xl font-semibold"
            classNameOfSubTitle="my-10 text-lg"
          />
        ))}
      </div>
    </Container>
  );
};

export default index;
