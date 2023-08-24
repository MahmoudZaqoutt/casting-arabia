import React, { createContext, useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { schema } from "@/constants/Register";
import { useRouter } from "next/router";
const UserInfoForm = (props: any) => {
  const [errors, setErrors] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: props.profileInfo.firstName,
    lastName: props.profileInfo.lastName,
    companyName: props.profileInfo.companyName,
    email: props.profileInfo.email,
    phoneNumber: props.profileInfo.phoneNumber,
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    const token = localStorage.getItem("token");

    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then()
      .catch((validationErrors: any) => {
        const Errors: any = {};
        validationErrors.inner.forEach((error: any) => {
          Errors[error.path] = error.message;
        });
        setErrors(Errors);
      });

    (async () => {
      try {
        const res = await fetch(
          "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/me",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          }
        );
        const profileInfo = await res.json();
        if (profileInfo) {
          setError(profileInfo.code);
          router.push("/creator/profile");
        }
      } catch (error: any) {}
    })();
  };

  return (
    <div>
      <div className="min-h-auto rounded-xl shadow-xl bg-white mt-[2rem] pb-10">
        <div className="w-[95%] mx-auto">
          <p className="text-2xl pt-8 ">Account Info</p>
        </div>
        <form onSubmit={handleSubmit} className="w-[95%] mx-auto mt-5">
          <div>
            <TextField
              value={formData.firstName}
              name="firstName"
              label="First Name"
              title="First Name"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.firstName && errors.firstName}
            </p>
          </div>
          <div className="">
            <TextField
              value={formData.lastName}
              name="lastName"
              label="Last Name"
              title="Last Name"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.lastName}
            </p>
          </div>

          <div className="col-span-2">
            <TextField
              value={formData.companyName}
              name="companyName"
              label="Company Name"
              title="Company Name"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.companyName}
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
              value={formData.phoneNumber}
              name="phoneNumber"
              label="Phone Number"
              title="Phone Number"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.phoneNumber}
            </p>
          </div>
          {error ? (
            <p className="text-lg  text-red-500  p-2 inline-block lowercase">
              {error}
            </p>
          ) : (
            ""
          )}

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
    </div>
  );
};

export default UserInfoForm;
