import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import { DatePicker, Space } from "antd";
import Modall from "@/components/Shared/Modal/Modal";
import Calender from "./Calender/Calender";
import ResponsiveDatePickers from "./Calender/Calender";
import BasicDateCalendar from "./Calender/Calender";
import Chips from "./Chips/Chips";

const index = () => {
  const { RangePicker } = DatePicker;

  const [errors, setErrors] = useState<any>([]);
  const [formData, setFormData] = useState({
    RoleDescription: "",
    startDate: { day: "", month: "", year: "" },
    endDate: { day: "", month: "", year: "" },
    FilmingCity: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e: any) => {
    setFormData({
      ...formData,
      startDate: { day: e[0].$D, month: e[0].$M + 1, year: e[0].$y },
      endDate: { day: e[1].$D, month: e[1].$M + 1, year: e[1].$y },
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
          Role Details
        </p>
        <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
          <div>
            <Textarea
              value={formData.RoleDescription}
              onChange={handleInputChange}
              name="RoleDescription"
              minRows={7}
              className="sm:w-[500px] "
              placeholder="Role Description"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.RoleDescription && errors.RoleDescription}
            </p>
          </div>

          <div className="mb-5">
            <DropDownList
              value={formData.FilmingCity}
              onChange={handleInputChange}
              options={["1", "2"]}
              label="Filming City"
              name="FilmingCity"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.FilmingCity && errors.FilmingCity}
            </p>
          </div>

          <div className="flex justify-between items-center mb-10">
            <p className="text-lg">Audition/Meeting Dates</p>
            <div>
              <Modall
                title="SELECT DATE"
                modalContent={<BasicDateCalendar />}
                modalName={
                  <p className="text-blue-600 text-xl border-2 border-blue-600 rounded-lg px-3 py-1  ">
                    +Add
                  </p>
                }
                modalClassName="!w-96"
              />
            </div>
          </div>

          <div>
            <Chips />
          </div>

          <div className="w-full mb-5">
            <p className="text-lg mb-5">Filming Availability</p>
            <div>
              <RangePicker
                onChange={handleDateChange}
                className="sm:w-[500px] h-14"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="border-2 border-blue-500 rounded-md text-lg text-blue-600 px-4 py-1 font-semibold hover:bg-blue-100 duration-200">
              Save For Later
            </button>
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.RoleDescription && formData.FilmingCity !== "" ? (
                <Link href={"/creator/opportunities/roles/edit/step-four"}>
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
