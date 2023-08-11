import Link from "next/link";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import {
  FormControlLabel,
  IconButton,
  RadioGroup,
  Tooltip,
} from "@mui/material";
import { schema } from "@/constants/Register";
import DropDownList from "../Shared/DropDownList/DropDownList";
import Container from "../Shared/Container/Container";
import ToolTip from "../Shared/ToolTip/ToolTip";

const TalentRegister = () => {
  const [errors, setErrors] = useState<any>([]);

  const [formData, setFormData] = useState({
    Talent: "Talent",
    FirstName: "",
    LastName: "",
    TalentType: "",
    CompanyName: "",
    talent: "",
    email: "",
    Gender: "",
    Country: "",
    PhoneNumber: "",
    Password: "",
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
      <div className="min-h-auto rounded-xl shadow-xl bg-white mt-[4rem] pb-10 mb-16">
        <div className="w-[95%] mx-auto">
          <p className="text-2xl pt-8 ">Join Casting Arabia</p>
          <p className="text-lg pt-8 text-gray-500">
            You are only a few steps away from applying to the exclusive
            opportunities on our platform! Please fill out the below form.Due to
            the large number of applications that we have received, we will
            approve a limited number of accounts during the first registration
            phase. You will be notified when it is your turn to complete your
            profile, apply for new opportunities, and take your talent to a
            whole new level … all free of charge!
          </p>
          <ToolTip
            className="text-lg font-semibold !text-blue-600  p-1 cursor-pointer mt-5"
            toolTipContent="Who can view my profile on Casting Arabia ?"
            toolTipToShow="Only the Talent Seeker who has posted the opportunity that you have applied to can see your profile."
          />
        </div>
        <form onSubmit={handleSubmit} className="w-[95%] mx-auto mt-5">
          <label htmlFor="" className="text-xl ">
            I am a :
          </label>
          <div className="grid grid-cols-2 gap-1 mt-5 w-full">
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              className="grid grid-cols-2 col-span-2 gap-4 ml-3 w-full"
              defaultValue="Talent"
            >
              <div>
                <FormControlLabel
                  value={"Talent"}
                  control={<Radio name="Talent" onChange={handleInputChange} />}
                  label="Talent"
                  className="w-full h-14 border-[1px] border-gray-300 outline-none rounded-md  text-lg "
                />
                <p className="text-sm  text-red-500  p-2 -ml-2 inline-block ">
                  {errors.TalentSeeker ? errors.Talent : ""}
                </p>
              </div>

              <div>
                <FormControlLabel
                  value={"TalentSeeker"}
                  control={<Radio name="Talent" onChange={handleInputChange} />}
                  label="Talent seeker"
                  className="w-full h-14 border-[1px] border-gray-300 outline-none rounded-md  text-lg "
                />
                <p className="text-sm  text-red-500 -ml-2 p-2 inline-block ">
                  {errors.Talent ? errors.TalentSeeker : ""}
                </p>
              </div>
            </RadioGroup>

            <div className="grid grid-cols-2 col-span-2 gap-4 w-full">
              <div>
                <TextField
                  value={formData.FirstName}
                  name="FirstName"
                  label="First Name"
                  title="First Name"
                  onChange={handleInputChange}
                  className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.FirstName && errors.FirstName}
                </p>
              </div>
              <div className="">
                <TextField
                  value={formData.LastName}
                  name="LastName"
                  label="Last Name"
                  title="Last Name"
                  onChange={handleInputChange}
                  className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.LastName}
                </p>
              </div>
            </div>
            {formData.Talent === "Talent" ? (
              <div className="col-span-2">
                <DropDownList
                  options={["Ten", "Twenty", "Thirty"]}
                  name="TalentType"
                  label="Talent Type ?"
                  value={formData.TalentType}
                  onChange={handleInputChange}
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.TalentType}
                </p>
              </div>
            ) : (
              <>
                <div className="col-span-2">
                  <TextField
                    name="CompanyName"
                    label="Company Name"
                    title="Company Name"
                    onChange={handleInputChange}
                    className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
                  />
                  <p className="text-sm  text-red-500  p-2 inline-block ">
                    {errors.CompanyName}
                  </p>
                </div>
                <div className="col-span-2">
                  <DropDownList
                    options={["Ten", "Twenty", "Thirty"]}
                    label="what talent are you looking for?"
                    name="talent"
                    value={formData.talent}
                    onChange={handleInputChange}
                  />
                  <p className="text-sm  text-red-500  p-2 inline-block ">
                    {errors.talent}
                  </p>
                </div>
              </>
            )}

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
              <TextField
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
              <TextField
                name="PhoneNumber"
                label="Phone Number"
                title="Phone Number"
                onChange={handleInputChange}
                className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.PhoneNumber}
              </p>
            </div>
            <div className="col-span-2">
              <TextField
                name="Password"
                label="Password"
                title="Password"
                type="Password"
                onChange={handleInputChange}
                className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.Password}
              </p>
            </div>
          </div>

          <p className="text-lg ">
            Your login means that you agree to{" "}
            <Link href={"/"} className="underline text-blue-800">
              Terms Of Service
            </Link>{" "}
            and{" "}
            <Link href={"/"} className="underline text-blue-800">
              Privacy Policy
            </Link>
          </p>
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

export default TalentRegister;
