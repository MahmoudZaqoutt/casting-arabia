import React, { useEffect, useState } from "react";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import { TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<any>([]);
  const [data, setData] = useState<any>();
  const [formData, setFormData] = useState({
    isCompleted: false,
    isPaid: false,
    mediaRequired: { characteristics: false, skills: false },
    paidRate: "2",
    paidType: "hourly",
  });

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
        isCompleted: data.isCompleted,
        isPaid: data.isPaid,
        mediaRequired: {
          characteristics: data.mediaRequired.characteristics,
          skills: data.mediaRequired.skills,
        },
        paidRate: data.paidRate,
        paidType: data.paidType,
      });
    }
  }, [data]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "isPaid") {
      value === "Paid"
        ? setFormData({ ...formData, isPaid: true, isCompleted: true })
        : setFormData({ ...formData, isPaid: false, isCompleted: true });
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

  return (
    <Container>
      <div className="mt-12 mb-[133px] h-[400px] ">
        <p className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10">
          Role Details
        </p>
        <div className="flex flex-col sm:w-[500px] mx-auto gap-3 mb-20">
          <div className="mb-5">
            <p className="text-lg mb-5">Compensation & Contract Details</p>
            <DropDownList
              label="isPaid ?"
              onChange={handleInputChange}
              options={["Paid", "Unpaid"]}
              name="isPaid"
              value={formData.isPaid ? "Paid" : "Unpaid"}
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.isPaid && errors.isPaid}
            </p>
          </div>
          {formData.isPaid ? (
            <div className="flex gap-4 mb-5">
              <div className="w-52">
                <DropDownList
                  options={["hourly", "daily", "weekly"]}
                  label="period"
                  name="paidType"
                  onChange={handleInputChange}
                  value={formData.paidType}
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.paidType && errors.paidType}
                </p>
              </div>

              <div>
                <TextField
                  value={formData.paidRate}
                  variant="standard"
                  label="$ Rate"
                  name="paidRate"
                  type="number"
                  onChange={handleInputChange}
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.paidRate && errors.paidRate}
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
              {formData.isPaid === false ||
              (formData.paidType && formData.paidRate) !== "" ? (
                <Link
                  href={`/creator/opportunities/${router.query.id}/edit/step-two`}
                >
                  Save
                </Link>
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
