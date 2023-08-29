import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { countries } from "@/constants/countries";
import { useRouter } from "next/router";
import { SKILLS } from "@/constants/skills";

const index = () => {
  const router = useRouter();

  const [errors, setErrors] = useState<any>([]);

  const [value, setValue] = React.useState<number[]>([20, 37]);

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
        citizenship: data.citizenship,
        considerAge: data.isAcceptingTapedAudition,
        considerCitizen: data.considerCitizen,
        maxAge: data.maxAge,
        minAge: data.minAge,
        considerSkills: data.skills,
      });
      setValue([data.minAge, data.maxAge]);
    }
  }, [data]);

  console.log(data);
  const [formData, setFormData] = useState<any>({
    citizenship: "",
    considerAge: false,
    considerCitizen: false,
    maxAge: value[1],
    minAge: value[0],
    considerSkills: [],
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e: any) => {
    const token = localStorage.getItem("token");

    const selectedSkill = e.target.value;

    (async () => {
      try {
        const res = await axios.post(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}/roles/${router.query.id2}/skills`,
          { level: "intermediate", skillId: Math.round(Math.random() * 100) },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res) {
          setFormData({
            ...formData,
            considerSkills: [
              ...formData.considerSkills,
              { skill: { id: res.data.id, title: selectedSkill } },
            ],
          });
        }
      } catch (error) {}
    })();
  };
  const handleDeleteSkill = async (skillId: any) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}/roles/${router.query.id2}/skills/${skillId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        const updatedSkills = formData.considerSkills.filter(
          (item: any) => item.id !== skillId
        );
        setFormData({ ...formData, considerSkills: updatedSkills });
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
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
      } catch (error: any) {
        console.log(error);
      }
    })();
  };

  const handleCheckChange = (e: any) => {
    const { checked, name } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setFormData({
      ...formData,
      minAge: event.target.value[0],
      maxAge: event.target.value[1],
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
              options={SKILLS}
              label="Skills"
              name="Skills"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.Skills && errors.Skills}
            </p>
          </div>
          <div className="w-full bg-white h-48  border-[1px] rounded-lg border-gray-300 overflow-y-auto">
            <p className="text-gray-500 p-3">Skill Name</p>

            {formData.considerSkills?.map((item: any, index: any) => (
              <div key={index} className="flex justify-between">
                <p className="text-lg ml-3 mt-4">{item.skill.title}</p>
                <div className="flex items-center">
                  <button onClick={() => handleDeleteSkill(item.id)}>
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
            <Box sx={{ width: 300 }}>
              <p className="mb-3">
                Age Range {value[0]} to {value[1]}
              </p>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </Box>
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.considerAge}
                  onChange={handleCheckChange}
                  name="considerAge"
                />
              }
              label="This is a firm requirement"
            />
          </div>

          <div className="my-5">
            <DropDownList
              value={formData.citizenship}
              onChange={handleInputChange}
              options={countries}
              label="Country of talent"
              name="citizenship"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.citizenship && errors.citizenship}
            </p>
          </div>

          <div className="mb-5">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.considerCitizen}
                  onChange={handleCheckChange}
                  name="considerCitizen"
                />
              }
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
              {formData.citizenship !== "" ? (
                <Link
                  href={`/creator/opportunities/${router.query.id}/roles/${router.query.id2}/edit/step-three`}
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
