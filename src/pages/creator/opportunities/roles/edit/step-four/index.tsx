import React, { useState } from "react";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import { TextField } from "@mui/material";

const index = () => {
  const [errors, setErrors] = useState<any>([]);
  const [formData, setFormData] = useState({
    RoleDescription: "",
    compensationAgreement: "Unpaid",
    period: "",
    Rate: "",
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
      <div className="mt-12 mb-[133px] h-[400px] ">
        <p className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10">
          Role Details
        </p>
        <div className="flex flex-col sm:w-[500px] mx-auto gap-3 mb-20">
          <div className="mb-5">
            <p className="text-lg">Compensation & Contract Details</p>
            <DropDownList
              value={formData.compensationAgreement}
              onChange={handleInputChange}
              options={["Paid", "Unpaid"]}
              name="compensationAgreement"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.compensationAgreement && errors.compensationAgreement}
            </p>
          </div>
          {formData.compensationAgreement === "Paid" ? (
            <div className="flex gap-4 mb-5">
              <div className="w-52">
                <DropDownList
                  options={["Hourly", "Daily", "Weekly"]}
                  label="period"
                  name="period"
                  onChange={handleInputChange}
                  value={formData.period}
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.period && errors.period}
                </p>
              </div>

              <div>
                <TextField
                  value={formData.Rate}
                  variant="standard"
                  label="$ Rate"
                  name="Rate"
                  type="number"
                  onChange={handleInputChange}
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.Rate && errors.Rate}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="flex items-center gap-4">
            <button className="border-2 border-blue-500 rounded-md text-lg text-blue-600 px-4 py-1 font-semibold hover:bg-blue-100 duration-200">
              Save For Later
            </button>
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.compensationAgreement === "Unpaid" ||
              (formData.period && formData.Rate) !== "" ? (
                <Link href={"/creator/opportunities/edit/step-two"}>Save</Link>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;
