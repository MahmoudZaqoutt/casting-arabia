import Card from "@/components/Shared/Card/Card";
import Container from "@/components/Shared/Container/Container";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import { IPropsSlide } from "@/interfaces/props/IPropsSlide";
import { TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { GrSend } from "react-icons/gr";

const LearningCenterPage = (props: IPropsSlide) => {
  const [formData, setFormData] = useState(null);
  const handleInputChange = (e: any) => {
    setFormData(e.target.value);
  };

  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const toggleSection = () => {
    setIsSectionVisible(!isSectionVisible);
  };
  return (
    <Container>
      <div className="mt-14">
        <p className="text-4xl font-semibold text-blue-700">Learning Center</p>
      </div>
      <div className="mt-7 flex justify-between">
        <form className="w-[95%]">
          <TextField
            name="Search"
            label="Search"
            title="Search"
            onChange={handleInputChange}
            className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
          />
        </form>
        <button
          onClick={toggleSection}
          title="show"
          className="min-w-[4%] rounded-full hover:bg-gray-200 duration-200"
        >
          <GrSend className=" w-full text-2xl" />
        </button>
      </div>

      {isSectionVisible && (
        <div className="border-[1px] border-blue-500 bg-white rounded-lg px-10 mt-5 py-10">
          <p className="text-2xl font-semibold">Filters Options</p>
          <div className="flex justify-between flex-col sm:flex-row gap-5 mt-5">
            <div className="w-full flex flex-col gap-3">
              <label className="text-lg text-gray-500">Category</label>
              <DropDownList options={["book", "book"]} />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label className="text-lg text-gray-500">Language</label>
              <DropDownList options={["Arabic", "English"]} />
              <button className="flex justify-end">
                <p className="text-xl text-white bg-blue-500 px-6 py-2 font-semibold rounded-xl inline-block">
                  Search
                </p>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {props.News.data.map((item: any, index: any) => (
          <Link href={`/articles/${item.slug}`}>
            <Card
              key={index}
              img={item.imageUrl}
              title={item.title}
              className="hover:scale-105 my-2 ease-in-out duration-150 "
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default LearningCenterPage;
