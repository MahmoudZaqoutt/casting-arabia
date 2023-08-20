import React, { useState } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import RangeSlider from "./RangeSlider/RangeSlider";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import { MdDelete } from "react-icons/md";

const index = () => {
  const [errors, setErrors] = useState<any>([]);

  const [skills, setSkills] = useState([""]);

  const [formData, setFormData] = useState({
    Skills: skills,
    Country: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e: any) => {
    const selectedSkill = e.target.value;
    setSkills([...skills, selectedSkill]);
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
            <DropDownList
              onChange={handleSkillChange}
              options={["foot", "bas", "s", "a", "f"]}
              label="Skills"
              name="Skills"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.Skills && errors.Skills}
            </p>
          </div>
          <div className="w-full bg-white h-48  border-[1px] rounded-lg border-gray-300 overflow-y-auto">
            <p className="text-gray-500 p-3">Skill Name</p>
            {skills.map((item: any, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-lg ml-3 mt-4">{item}</p>
                <div className="flex items-center">
                  <button>
                    <MdDelete className="text-2xl text-red-600" />
                    {""}
                  </button>
                  <p className="text-lg">Required</p>
                  <Checkbox />
                </div>
              </div>
            ))}
          </div>

          <div className="ml-10">
            <RangeSlider />
          </div>
          <div>
            <FormControlLabel
              control={<Checkbox name="Requirement" />}
              label="This is a firm requirement"
            />
          </div>

          <div className="my-10">
            <DropDownList
              onChange={handleInputChange}
              options={["Palestine", "Egypt"]}
              label="Country of talent"
              name="Country"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.Country && errors.Country}
            </p>
          </div>

          <div className="mb-5">
            <FormControlLabel
              control={<Checkbox name="Requirement" />}
              label="This is a firm requirement"
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
              {formData.Skills && formData.Country !== "" ? (
                <Link href={"/creator/opportunities/roles/edit/step-three"}>
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
