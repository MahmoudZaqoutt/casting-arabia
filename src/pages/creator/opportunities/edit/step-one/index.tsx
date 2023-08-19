import React, { useState } from "react";
import AddProductionPersonal from "./AddProductionPersonal/AddProductionPersonal";
import { TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";

const index = () => {
  const [errors, setErrors] = useState<any>([]);
  const [formData, setFormData] = useState({
    TitleOfProduction: "",
    ProductionCompany: "",
    ProductionDescription: "",
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
      <div className="my-12">
        <p className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10">
          Posting an Opportunity
        </p>
        <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
          <div>
            <TextField
              value={formData.TitleOfProduction}
              onChange={handleInputChange}
              name="TitleOfProduction"
              label="Title of Production"
              variant="standard"
              placeholder="Production Personal"
              className="sm:w-[500px]"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.TitleOfProduction && errors.TitleOfProduction}
            </p>
          </div>

          <div>
            <TextField
              value={formData.ProductionCompany}
              onChange={handleInputChange}
              name="ProductionCompany"
              label="Production Company"
              variant="standard"
              placeholder="Production Company"
              className="sm:w-[500px]"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.ProductionCompany && errors.ProductionCompany}
            </p>
          </div>

          <AddProductionPersonal />
          <div>
            <Textarea
              value={formData.ProductionDescription}
              onChange={handleInputChange}
              name="ProductionDescription"
              minRows={7}
              className="sm:w-[500px] "
              placeholder="Production Description"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.ProductionDescription && errors.ProductionDescription}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="border-2 border-blue-500 rounded-md text-lg text-blue-600 px-4 py-1 font-semibold hover:bg-blue-100 duration-200">
              Save For Later
            </button>
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.ProductionCompany &&
              formData.ProductionDescription &&
              formData.TitleOfProduction !== "" ? (
                <Link href={"/creator/opportunities/edit/step-two"}>
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
