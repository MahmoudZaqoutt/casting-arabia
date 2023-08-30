import Container from "@/components/Shared/Container/Container";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import { TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import RolesCard from "./rolesCard/RolesCard";
import { IPropsSlide } from "@/interfaces/props/IPropsSlide";

const RolesPage = (props: IPropsSlide) => {
  console.log(props.myRoles[1].name);
  const [formData, setFormData] = useState({
    search: "",
    opportunity: "",
    status: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "search") {
      setData(
        props.myRoles.filter(
          (item: any) =>
            item.name?.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const [data, setData] = useState(props.myRoles);

  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const toggleSection = () => {
    setIsSectionVisible(!isSectionVisible);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    setData(
      props.myRoles.filter((item: any) => formData.status === item.status)
    );
  };

  return (
    <div className="min-h-[500px]">
      <Container>
        <div className="mt-14">
          <p className="text-4xl font-semibold text-blue-700">Roles</p>
        </div>
        <div className="mt-7 flex justify-between">
          <form className="w-[95%]">
            <TextField
              name="search"
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
                <label className="text-lg text-gray-500">Status</label>
                <DropDownList
                  onChange={handleInputChange}
                  value={formData.status}
                  name="status"
                  options={["opened", "closed"]}
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label className="text-lg text-gray-500">Opportunity</label>
                <DropDownList
                  onChange={handleInputChange}
                  value={formData.opportunity}
                  name="opportunity"
                  options={["All"]}
                />
                <button onClick={handleSearch} className="flex justify-end">
                  <p className="text-xl text-white bg-blue-500 px-6 py-2 font-semibold rounded-xl inline-block">
                    Search
                  </p>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {data.map((item: any, index: any) => (
            <Link key={index} href={`/creator`}>
              <RolesCard img={item.coverImage} name={item.name} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RolesPage;
