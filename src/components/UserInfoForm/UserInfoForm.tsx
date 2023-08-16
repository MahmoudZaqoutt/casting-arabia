import React, { createContext, useContext, useState } from "react";
import TextField from "@mui/material/TextField";

import { schema } from "@/constants/Register";
import { UserInfoContext } from "@/contexts";

const UserInfoForm = (props: any) => {
  const [errors, setErrors] = useState<any>([]);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    CompanyName: "",
    email: "",
    PhoneNumber: "",
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
    <UserInfoContext.Provider value={formData}>
      {props.children}
      {props.show ? (
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
                value={formData.CompanyName}
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
                value={formData.email}
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
                value={formData.PhoneNumber}
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
                Edit
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </UserInfoContext.Provider>
  );
};

export default UserInfoForm;
