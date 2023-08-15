import React, { useState } from "react";
import { schema } from "@/constants/Register";
import DropDownList from "../Shared/DropDownList/DropDownList";
import Container from "../Shared/Container/Container";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const BasicInfoForm = () => {
  const [errors, setErrors] = useState<any>([]);

  const [formData, setFormData] = useState({
    Gender: "",
    dateOfBirth: { day: "", month: "", year: "" },
    Country: "",
    City: "",
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
      <div className="min-h-auto rounded-xl shadow-xl bg-white mt-[4rem] pb-10 mb-16">
        <div className="w-[95%] mx-auto">
          <p className="text-2xl pt-8 ">Basic Info</p>
        </div>
        <form onSubmit={handleSubmit} className="w-[95%] mx-auto mt-5">
          <div className="grid grid-cols-2 gap-1 mt-5 w-full">
            <div className="grid grid-cols-2 col-span-2 gap-4 w-full"></div>

            <div className="col-span-2">
              <DropDownList
                options={["Male", "Female"]}
                name="Gender"
                label="Gender"
                value={formData.Gender}
                onChange={handleInputChange}
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.Gender}
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
                options={["Palestine", "Egypt"]}
                name="Country"
                label="Country"
                value={formData.Country}
                onChange={handleInputChange}
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.Country}
              </p>
            </div>
            <div className="col-span-2">
              <DropDownList
                options={["Gaza", "Gaza"]}
                name="City"
                label="City"
                value={formData.City}
                onChange={handleInputChange}
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.City}
              </p>
            </div>
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

export default BasicInfoForm;
