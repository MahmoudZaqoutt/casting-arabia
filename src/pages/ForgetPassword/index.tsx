import Container from "@/components/Shared/Container/Container";
import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import * as yup from "yup";

const forgetPassword = () => {
  const [errors, setErrors] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const [success, setSuccess] = useState<any>("");

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("required"),
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        try {
          const res = await axios.post(
            "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/auth/forget-password",
            formData
          );
          if (res) {
            if (res.data.success)
              setSuccess("A password reset link has been sent to your email");
          }
        } catch (error) {
          setError("user not found");
        }
      })
      .catch((validationErrors) => {
        const Errors: any = {};
        validationErrors.inner.forEach((error: any) => {
          Errors[error.path] = error.message;
        });
        setErrors(Errors);
        console.log(errors);
      });
  };

  return (
    <Container>
      <div className="min-h-[250px] rounded-xl shadow-xl bg-white mt-[8rem] pb-10 mb-[165px] border-[1px]">
        <p className="text-3xl pt-8 text-center">Reset password</p>
        <form onSubmit={handleSubmit}>
          <div className=" w-[95%] mx-auto pt-10">
            <TextField
              name="email"
              title="Email"
              label="Email"
              onChange={handleInputChange}
              className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl text-lg"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.email ? errors.email : ""}
            </p>

            {success ? (
              <p className="text-xl text-center mb-2">{success}</p>
            ) : (
              <p className="text-xl text-center text-red-500 mb-2">{error}</p>
            )}
          </div>

          <div className="w-[95%] mx-auto">
            <button
              type="submit"
              className=" w-full bg-blue-600 hover:bg-blue-800 duration-150 text-white text-xl font-semibold mt-3 p-3 rounded-xl"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default forgetPassword;
