import Container from "@/components/Shared/Container/Container";
import { TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { IPropsSlide } from "@/interfaces/props/IPropsSlide";
import OpportunitiesCard from "../OpportunitiesCard/OpportunitiesCard";
import { AiOutlineCheck } from "react-icons/ai";
import { TbClockHour4 } from "react-icons/tb";
import { FaPen } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

const OpportunitiesPage = (props: IPropsSlide) => {
  console.log(props.MyOpportunities[0]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(props.MyOpportunities);

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
    setData(
      props.MyOpportunities.filter((item: any) =>
        item.title?.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleAllOpportunities = (e: any) => {
    e.preventDefault();
    setData(props.MyOpportunities);
  };

  const handlePublishedOpportunities = (e: any) => {
    e.preventDefault();
    setData(
      props.MyOpportunities.filter(
        (item: any) => item.status.toLowerCase() === "published"
      )
    );
  };

  const handlePendingOpportunities = (e: any) => {
    e.preventDefault();
    setData(
      props.MyOpportunities.filter(
        (item: any) => item.status.toLowerCase() === "pending"
      )
    );
  };

  const handleDraftOpportunities = (e: any) => {
    e.preventDefault();
    setData(
      props.MyOpportunities.filter(
        (item: any) => item.status.toLowerCase() === "draft"
      )
    );
  };

  const handleRejectedOpportunities = (e: any) => {
    e.preventDefault();
    setData(
      props.MyOpportunities.filter(
        (item: any) => item.status.toLowerCase() === "rejected"
      )
    );
  };

  return (
    <div className="min-h-[500px]">
      <Container>
        <div className="mt-14">
          <p className="text-4xl font-semibold text-blue-700">Opportunities</p>
        </div>
        <div className="mt-7 flex justify-between">
          <form className="w-full">
            <TextField
              name="Search"
              label="Search"
              title="Search"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
          </form>
        </div>
        <div className="my-5 flex items-center gap-5">
          <button
            onClick={handleAllOpportunities}
            className="rounded-full bg-gray-300 text-xl w-10"
          >
            All
          </button>
          <button
            onClick={handlePublishedOpportunities}
            className="rounded-full border-2 border-green-500 text-xl w-36 text-green-500 flex items-center gap-2 pl-2"
          >
            <AiOutlineCheck /> Published
          </button>
          <button
            onClick={handlePendingOpportunities}
            className="rounded-full border-2 border-yellow-500 text-xl w-32 text-yellow-500 flex items-center gap-2 pl-3"
          >
            <TbClockHour4 /> Pending
          </button>
          <button
            onClick={handleDraftOpportunities}
            className="rounded-full border-2 border-gray-500 text-xl w-24 text-gray-500 flex items-center gap-2 pl-2"
          >
            <FaPen /> Draft
          </button>
          <button
            onClick={handleRejectedOpportunities}
            className="rounded-full border-2 border-red-500 text-xl w-32 text-red-500 flex items-center gap-2 pl-3"
          >
            <GiCancel /> Rejected
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 my-5">
          {data?.map((item: any, index: any) => (
            <Link key={index} href={`opportunities/${item.id}`}>
              <OpportunitiesCard
                img={item.coverImage}
                title={item.title}
                status={item.status}
              />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OpportunitiesPage;
