import React, { useState } from "react";
import { schema } from "@/constants/Register";
import DropDownList from "../Shared/DropDownList/DropDownList";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { countries } from "@/constants/countries";
import { useRouter } from "next/router";

const BasicInfoForm = (props: any) => {
  const [errors, setErrors] = useState<any>([]);
  const router = useRouter();
  const [formData, setFormData] = useState({
    dob: props.profileInfo.dob,
    country: props.profileInfo.country,
    city: props.profileInfo.city,
    gender: props.profileInfo.gender,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e: any) => {
    const selectedDate = new Date(e.$y, e.$M, e.$D);
    const isoDate = selectedDate.toISOString();
    setFormData({
      ...formData,
      dob: isoDate,
    });
  };

  const handleSubmit = (event: any) => {
    const token = localStorage.getItem("token");

    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(() => {})
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
          router.push("/creator/profile");
        }
      } catch (error: any) {}
    })();
  };

  return (
    <div className="min-h-auto rounded-xl shadow-xl bg-white mt-[2rem] pb-10 ">
      <div className="w-[95%] mx-auto">
        <p className="text-2xl pt-8 ">Basic Info</p>
      </div>
      <form onSubmit={handleSubmit} className="w-[95%] mx-auto mt-5">
        <div className="grid grid-cols-2 gap-1 mt-5 w-full">
          <div className="grid grid-cols-2 col-span-2 gap-4 w-full"></div>

          <div className="col-span-2">
            <DropDownList
              options={["male", "female"]}
              name="gender"
              label="Gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.gender}
            </p>
          </div>
          <div className="col-span-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date Of Birth"
                className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg mb-6"
                onChange={handleDateChange}
              />
            </LocalizationProvider>
          </div>
          <div className="col-span-2">
            <DropDownList
              options={countries}
              name="country"
              label="Country"
              value={formData.country}
              onChange={handleInputChange}
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.country}
            </p>
          </div>
          <div className="col-span-2">
            <DropDownList
              options={["Jalālābād جلال آباد", "Gaza"]}
              name="city"
              label="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.city}
            </p>
          </div>
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
  );
};

export default BasicInfoForm;
