import React, { useState } from "react";
import AddProductionPersonal from "../../../edit/step-one/AddProductionPersonal/AddProductionPersonal";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";

const index = () => {
  const [errors, setErrors] = useState<any>([]);
  const [formData, setFormData] = useState({
    RoleName: "",
    talent: "",
    SubType: "",
    Gender: "",
  });

  const [check, setCheck] = useState({
    Accepting: false,
    Requirement: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckChange = (e: any) => {
    const { checked, name } = e.target;
    setCheck({ ...check, [name]: checked });
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
            <TextField
              value={formData.RoleName}
              onChange={handleInputChange}
              name="RoleName"
              label="Role Name"
              variant="standard"
              placeholder="Production Personal"
              className="sm:w-[500px]"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.RoleName && errors.RoleName}
            </p>
          </div>

          <div>
            <DropDownList
              onChange={handleInputChange}
              label="talent you are looking for ?"
              name="talent"
              value={formData.talent}
              options={["Male", "Female"]}
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.talent && errors.talent}
            </p>
          </div>

          <div>
            <DropDownList
              onChange={handleInputChange}
              label="Sub Type"
              name="SubType"
              value={formData.SubType}
              options={["Male", "Female"]}
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.SubType && errors.SubType}
            </p>
          </div>
          <div>
            <DropDownList
              onChange={handleInputChange}
              label="Gender"
              name="Gender"
              value={formData.Gender}
              options={["Male", "Female"]}
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.Gender && errors.Gender}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <FormControlLabel
              control={
                <Checkbox name="Requirement" onChange={handleCheckChange} />
              }
              label="This is a firm requirement"
            />
            <FormControlLabel
              control={
                <Checkbox name="Accepting" onChange={handleCheckChange} />
              }
              label="Accepting taped audition?"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="border-2 border-blue-500 rounded-md text-lg text-blue-600 px-4 py-1 font-semibold hover:bg-blue-100 duration-200">
              Save For Later
            </button>
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.SubType &&
              formData.talent &&
              formData.Gender &&
              formData.RoleName !== "" ? (
                <Link href={"/creator/opportunities/roles/edit/step-one"}>
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
