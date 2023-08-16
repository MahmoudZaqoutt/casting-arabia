import React, { useState } from "react";
import { TextField } from "@mui/material";
import * as yup from "yup";

const LinksModalForm = () => {
  const [errors, setErrors] = useState<any>([]);

  const [formData, setFormData] = useState({
    Url: "",
  });
  const schema = yup.object().shape({
    Url: yup.string().required("URL is a required field"),
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
    <div>
      <form onSubmit={handleSubmit} className="w-[95%] mx-auto mt-5">
        <div>
          <TextField
            value={formData.Url}
            name="Url"
            label="Url"
            title="Url"
            onChange={handleInputChange}
            className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
          />
          <p className="text-sm  text-red-500  p-2 inline-block ">
            {errors.Url && errors.Url}
          </p>
        </div>

        <div className="w-full mx-auto">
          <button
            type="submit"
            className=" w-full bg-blue-600 hover:bg-blue-800 duration-150 text-white text-xl font-semibold  p-3 rounded-xl"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinksModalForm;
