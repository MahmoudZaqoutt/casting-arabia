import Link from "next/link";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import { FormControlLabel, RadioGroup } from "@mui/material";
import { schema } from "@/constants/Register";
import DropDownList from "../../components/Shared/DropDownList/DropDownList";
import Container from "../../components/Shared/Container/Container";
import ToolTip from "../../components/Shared/ToolTip/ToolTip";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Chip from "@mui/material/Chip";
import { countries } from "@/constants/countries";

const index = () => {
  const router = useRouter();
  const [talentTypes, setTalentTypes] = React.useState<readonly string[]>([]);
  const [errors, setErrors] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const [formData, setFormData] = useState<any>({
    companyName: "dash",
    country: "",
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    talentTypes: [],
    password: "",
    phoneNumber: "",
    role: "talent",
  });

  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleDelete = (typeToDelete: any) => () => {
    setTalentTypes((types: any) =>
      types.filter((type: any) => type !== typeToDelete)
    );
    setFormData({ ...formData, talentTypes: [...talentTypes] });
  };

  const handleTalentType = (e: any) => {
    const { value } = e.target;
    setTalentTypes([...talentTypes, value]);
    setFormData({ ...formData, talentTypes: [...talentTypes, value] });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {})
      .catch((validationErrors: any) => {
        const Errors: any = {};
        validationErrors.inner.forEach((error: any) => {
          Errors[error.path] = error.message;
        });
        setErrors(Errors);
      });

    (async () => {
      try {
        const res = await axios.post(
          "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/auth/register",
          formData
        );
        if (res) {
          localStorage.setItem("token", res.data.accessToken);
          router.push("/creator");
          console.log(res);
        }
      } catch (error: any) {
        setError(error.message);
        setError(error.response.data.code);
      }
    })();
  };

  useEffect(() => {}, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setIsAuthorized(true) : setIsAuthorized(false);

    // (async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://amplify-dev.d35zevlqqza5wv.amplifyapp.com/api/countries?select=name"
    //     );
    //     if (res) {
    //       console.log(res);
    //     }
    //   } catch (error) {
    //     // console.log(error);
    //   }
    // })();
  }, []);

  console.log(formData);
  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <Container>
        <div className="min-h-auto rounded-xl shadow-xl bg-white mt-[4rem] pb-10 mb-16">
          <div className="w-[95%] mx-auto">
            <p className="text-2xl pt-8 ">Join Casting Arabia</p>
            <p className="text-lg pt-8 text-gray-500">
              You are only a few steps away from applying to the exclusive
              opportunities on our platform! Please fill out the below form.Due
              to the large number of applications that we have received, we will
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
                defaultValue="talent"
              >
                <div>
                  <FormControlLabel
                    control={
                      <Radio
                        name="role"
                        value={"talent"}
                        onChange={handleInputChange}
                      />
                    }
                    label="Talent"
                    className="w-full h-14 border-[1px] border-gray-300 outline-none rounded-md  text-lg "
                  />
                  <p className="text-sm  text-red-500  p-2 -ml-2 inline-block ">
                    {errors.role ? errors.role : ""}
                  </p>
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <Radio
                        name="role"
                        value={"agent"}
                        onChange={handleInputChange}
                      />
                    }
                    label="Talent seeker"
                    className="w-full h-14 border-[1px] border-gray-300 outline-none rounded-md  text-lg "
                  />
                  <p className="text-sm  text-red-500 -ml-2 p-2 inline-block ">
                    {errors.role ? errors.role : ""}
                  </p>
                </div>
              </RadioGroup>

              <div className="grid grid-cols-2 col-span-2 gap-4 w-full">
                <div>
                  <TextField
                    value={formData.firstName}
                    name="firstName"
                    label="First Name"
                    title="First Name"
                    onChange={handleInputChange}
                    className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
                  />
                  <p className="text-sm  text-red-500  p-2 inline-block ">
                    {errors.firstName && errors.firstName}
                  </p>
                </div>
                <div className="">
                  <TextField
                    value={formData.lastName}
                    name="lastName"
                    label="Last Name"
                    title="Last Name"
                    onChange={handleInputChange}
                    className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
                  />
                  <p className="text-sm  text-red-500  p-2 inline-block ">
                    {errors.lastName}
                  </p>
                </div>
              </div>
              {formData.role === "talent" ? (
                <div className="col-span-2">
                  <DropDownList
                    options={[
                      "singer",
                      "actor",
                      "model",
                      "host/hostess",
                      "musician",
                      "staff",
                      "writer",
                      "dancer",
                      "other",
                    ]}
                    name="talentTypes"
                    label="Talent Type ?"
                    value={talentTypes}
                    onChange={handleTalentType}
                  />
                  <p className="text-sm  text-red-500  p-2 inline-block ">
                    {errors.talentTypes}
                  </p>
                  <div className="flex items-center gap-5 mb-1 overflow-hidden hover:overflow-auto">
                    {talentTypes.map((data: any, index) => {
                      return (
                        <div key={index}>
                          <Chip
                            className="!text-lg  text-white bg-blue-600 rounded-xl"
                            label={data}
                            onDelete={handleDelete(data)}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <>
                  <div className="col-span-2">
                    <TextField
                      value={formData.companyName}
                      name="companyName"
                      label="Company Name"
                      title="Company Name"
                      onChange={handleInputChange}
                      className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
                    />
                    <p className="text-sm  text-red-500  p-2 inline-block ">
                      {errors.companyName}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <DropDownList
                      options={[
                        "Singer",
                        "Actor",
                        "Model",
                        "Host/hostess",
                        "Musician",
                        "staff",
                        "writer",
                        "Dancer",
                        "Other",
                      ]}
                      label="what talent are you looking for?"
                      name="talentTypes"
                      value={talentTypes}
                      onChange={handleTalentType}
                    />
                    <p className="text-sm  text-red-500  p-2 inline-block ">
                      {errors.talentTypes}
                    </p>

                    <div className="flex items-center gap-5 mb-1 overflow-hidden hover:overflow-auto">
                      {talentTypes.map((data: any, index) => {
                        return (
                          <div key={index}>
                            <Chip
                              className="!text-lg  text-white bg-blue-600 rounded-xl"
                              label={data}
                              onDelete={handleDelete(data)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

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
                <TextField
                  value={formData.email}
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
                <TextField
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  label="Phone Number"
                  title="Phone Number"
                  onChange={handleInputChange}
                  className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.phoneNumber}
                </p>
              </div>
              <div className="col-span-2">
                <TextField
                  value={formData.password}
                  name="password"
                  label="Password"
                  title="Password"
                  type="Password"
                  onChange={handleInputChange}
                  className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.password}
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

            {error ? (
              <p className="text-lg !lowercase  text-red-500  mt-3 inline-block ">
                {error ? error : ""}
              </p>
            ) : (
              ""
            )}
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
    </>
  );
};

export default index;
