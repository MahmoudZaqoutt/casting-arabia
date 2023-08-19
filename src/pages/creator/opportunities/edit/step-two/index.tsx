import React, { useState } from "react";
import { TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const index = () => {
  const [errors, setErrors] = useState<any>([]);
  const [formData, setFormData] = useState({
    RoleName: "",
    dateOfBirth: { day: "", month: "", year: "" },
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e: any) => {
    console.log(e.$D, e.$M, e.$y);
    setFormData({
      ...formData,
      dateOfBirth: { day: e.$D, month: e.$M, year: e.$y },
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        console.log("Form data is valid:", formData);
      })
      .catch((validationErrors: any) => {
        const Errors: any = {};
        validationErrors.inner.forEach((error: any) => {
          Errors[error.path] = error.message;
        });
        setErrors(Errors);
      });
  };
  return (
    <Container>
      <div className="my-12">
        <p className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10">
          Posting an Opportunity
        </p>
        <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
          <div className="flex sm:w-[500px] mx-auto justify-between items-center">
            <p className="text-xl text-gray-500   ">Role(s) You're Castig</p>
            <button className=" hover:bg-blue-50 duration-200 text-gray-500 rounded-full text-3xl">
              <Link href={"/creator/opportunities/roles/edit/step-one"}>
                <IoAddOutline /> {""}
              </Link>
            </button>
          </div>
          <div>
            <Textarea
              value={formData.RoleName}
              onChange={handleInputChange}
              name="RoleName"
              minRows={7}
              className="sm:w-[500px] "
              placeholder="Role Name"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.RoleName && errors.RoleName}
            </p>
          </div>

          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="When should this listing expire?"
                className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg  border-none"
                onChange={handleDateChange}
              />
            </LocalizationProvider>
          </div>

          <div className="flex items-center gap-4">
            <button className="border-2 border-blue-500 rounded-md text-lg text-blue-600 px-4 py-1 font-semibold hover:bg-blue-100 duration-200">
              Save For Later
            </button>
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.RoleName !== "" ? (
                <Link href={"/creator/opportunities/edit/step-two"}>
                  Continue
                </Link>
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;
