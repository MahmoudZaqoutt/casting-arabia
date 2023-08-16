import React, { useState } from "react";
import { schema } from "@/constants/Register";
import DropDownList from "../DropDownList/DropDownList";

const SkillsModalForm = () => {
  const [errors, setErrors] = useState<any>([]);

  const [formData, setFormData] = useState({
    Level: "",
    Accordion: "",
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
    <form onSubmit={handleSubmit} className="mt-[4rem] ">
      <div className="col-span-2">
        <DropDownList
          options={["Palestine", "Egypt"]}
          name="Accordion"
          label="Accordion"
          value={formData.Accordion}
          onChange={handleInputChange}
        />
        <p className="text-sm  text-red-500  p-2 inline-block ">
          {errors.Accordion}
        </p>
      </div>

      <div className="col-span-2">
        <DropDownList
          options={["Palestine", "Egypt"]}
          name="Level"
          label="Level"
          value={formData.Level}
          onChange={handleInputChange}
        />
        <p className="text-sm  text-red-500  p-2 inline-block ">
          {errors.Level}
        </p>
      </div>

      <div className="w-full mx-auto">
        <button
          type="submit"
          className=" w-full bg-blue-600 hover:bg-blue-800 duration-150 text-white text-xl font-semibold mt-8 p-3 rounded-xl"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default SkillsModalForm;
