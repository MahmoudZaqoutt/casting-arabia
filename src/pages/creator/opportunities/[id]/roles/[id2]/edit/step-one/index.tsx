import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import axios from "axios";
import { options1, options2 } from "@/constants/talentType";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<any>([]);
  const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      if (router.query.id && router.query.id2) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get(
            `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}/roles/${router.query.id2}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (res) {
            setData(res.data);
          }
        } catch (error) {}
      }
    })();
  }, [router.query.id, router.query.id2]);

  useEffect(() => {
    if (data) {
      setFormData({
        considerGender: data.considerGender,
        gender: data.gender,
        isAcceptingTapedAudition: data.isAcceptingTapedAudition,
        name: data.name,
        otherRoleType: data.otherRoleType,
        otherTalentType: data.otherTalentType,
        talentType: data.talentType,
        type: data.type,
      });
      setSelectedOption1(data.talentType);
      setSelectedOption2(data.type);
    }
  }, [data]);

  const [formData, setFormData] = useState({
    considerGender: false,
    gender: "",
    isAcceptingTapedAudition: false,
    name: "",
    otherRoleType: "",
    otherTalentType: "",
    talentType: "",
    type: "",
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
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (event: any) => {
    const token = localStorage.getItem("token");
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

    (async () => {
      try {
        const res = await axios.put(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}/roles/${router.query.id2}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res) {
          console.log(res);
        }
      } catch (error: any) {
        console.log(error);
      }
    })();
  };

  const [selectedOption1, setSelectedOption1] = useState<any>("");
  const [selectedOption2, setSelectedOption2] = useState<any>("");

  const handleSelect1 = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption1(selectedValue);
    setSelectedOption2("");
    setFormData({ ...formData, talentType: selectedValue });
  };

  const handleSelect2 = (event: any) => {
    setSelectedOption2(event.target.value);
    setFormData({ ...formData, type: event.target.value });
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
              value={formData.name}
              onChange={handleInputChange}
              name="name"
              label="Role Name"
              variant="standard"
              placeholder="Production Personal"
              className="sm:w-[500px]"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.name && errors.name}
            </p>
          </div>

          <div>
            <DropDownList
              onChange={handleSelect1}
              label="talent you are looking for ?"
              name="talentType"
              value={selectedOption1}
              options={options1}
            />
          </div>

          {formData.talentType === "other" ? (
            <div>
              <TextField
                value={formData.otherTalentType}
                onChange={handleInputChange}
                name="otherTalentType"
                variant="standard"
                label="Other Talent Type"
                className="sm:w-[500px] mt-5"
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.otherTalentType && errors.otherTalentType}
              </p>
            </div>
          ) : (
            <div className="my-5">
              <DropDownList
                onChange={handleSelect2}
                label="Sub Type"
                name="type"
                value={selectedOption2}
                options={options2[selectedOption1]}
              />
            </div>
          )}

          {formData.type === "other" ? (
            <div>
              <TextField
                value={formData.otherRoleType}
                onChange={handleInputChange}
                name="otherRoleType"
                variant="standard"
                label="Other Role Type"
                className="sm:w-[500px] "
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.otherRoleType && errors.otherRoleType}
              </p>
            </div>
          ) : (
            <></>
          )}

          <div>
            <DropDownList
              onChange={handleInputChange}
              label="Gender"
              name="gender"
              value={formData.gender}
              options={["male", "female"]}
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.gender && errors.gender}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.considerGender}
                  name="considerGender"
                  onChange={handleCheckChange}
                />
              }
              label="This is a firm requirement"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.isAcceptingTapedAudition}
                  name="isAcceptingTapedAudition"
                  onChange={handleCheckChange}
                />
              }
              label="Accepting taped audition?"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="border-2 border-blue-500 rounded-md text-lg text-blue-600 px-4 py-1 font-semibold hover:bg-blue-100 duration-200">
              <Link href={"/creator/opportunities/edit/step-two"}>
                Save For Later
              </Link>
            </button>
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.type &&
              formData.talentType &&
              formData.gender &&
              formData.name !== "" ? (
                <Link
                  href={`/creator/opportunities/${router.query.id}/roles/${router.query.id2}/edit/step-two`}
                >
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
