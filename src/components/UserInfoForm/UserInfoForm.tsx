import Link from "next/link";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import {
  FormControlLabel,
  IconButton,
  RadioGroup,
  Tooltip,
} from "@mui/material";
import { schema } from "@/constants/Register";
import DropDownList from "../Shared/DropDownList/DropDownList";
import Container from "../Shared/Container/Container";
import ToolTip from "../Shared/ToolTip/ToolTip";

const UserInfoForm = () => {
  const [errors, setErrors] = useState<any>([]);

  const [formData, setFormData] = useState({
    Talent: "Talent",
    FirstName: "",
    LastName: "",
    TalentType: "",
    CompanyName: "",
    talent: "",
    email: "",
    Gender: "",
    Country: "",
    PhoneNumber: "",
    Password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      <div className="min-h-auto rounded-xl shadow-xl bg-white mt-[4rem] pb-10 mb-16">
        <div className="w-[95%] mx-auto">
          <p className="text-2xl pt-8 ">Account Info</p>
        </div>
        <form onSubmit={handleSubmit} className="w-[95%] mx-auto mt-5">
          <div>
            <TextField
              value={formData.FirstName}
              name="FirstName"
              label="First Name"
              title="First Name"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.FirstName && errors.FirstName}
            </p>
          </div>
          <div className="">
            <TextField
              value={formData.LastName}
              name="LastName"
              label="Last Name"
              title="Last Name"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.LastName}
            </p>
          </div>

          <div className="col-span-2">
            <TextField
              name="CompanyName"
              label="Company Name"
              title="Company Name"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.CompanyName}
            </p>
          </div>

          <div className="col-span-2">
            <TextField
              name="email"
              label="Email"
              title="Email"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.email}
            </p>
          </div>

          <div className="col-span-2">
            <TextField
              name="PhoneNumber"
              label="Phone Number"
              title="Phone Number"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.PhoneNumber}
            </p>
          </div>

          <div className="w-full mx-auto">
            <button
              type="submit"
              className=" w-full bg-blue-600 hover:bg-blue-800 duration-150 text-white text-xl font-semibold mt-8 p-3 rounded-xl"
            >
              Join Casting Arabia
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default UserInfoForm;
