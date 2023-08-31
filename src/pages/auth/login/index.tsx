import Link from "next/link";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import Container from "@/components/Shared/Container/Container";
import axios from "axios";
import { useRouter } from "next/router";
import { FormControl } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = useState({
    email: "dash.casting.2023+1@gmail.com",
    password: "dash@123",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/creator");
    } else {
      router.push("/auth/login");
    }
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("required"),
    password: yup.string().required("required"),
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        try {
          const res = await axios.post(
            "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/auth/login",
            formData
          );

          if (res) {
            localStorage.setItem("token", res.data.accessToken);
            router.push("/creator");
          }
        } catch (error: any) {
          setError(error.message);
        }
      })
      .catch((error) => {
        const Errors: any = {};
        error.inner.forEach((error: any) => {
          Errors[error.path] = error.message;
        });
        setErrors(Errors);
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Container>
        <div className=" min-h-[450px] rounded-xl shadow-xl bg-white mt-[5rem] pb-10 mb-16">
          <p className="text-3xl pt-8 text-center">login</p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-2  pt-8">
              <div className="w-[95%] ">
                <TextField
                  value={formData.email}
                  name="email"
                  label="Email"
                  title="Email"
                  onChange={handleInputChange}
                  className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.email ? errors.email : ""}
                </p>
              </div>
              <div className="w-[95%]">
                <FormControl
                  className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg"
                  variant="outlined"
                >
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    title="Password"
                    onChange={handleInputChange}
                    name="password"
                    label="Password"
                    value={formData.password}
                  />
                </FormControl>

                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.password ? errors.password : ""}
                </p>
              </div>
            </div>
            <Link href={"/forgetPassword"}>
              <p className="text-xl   text-blue-600 ml-2 sm:ml-4 lg:ml-6 xl:ml-7 hover:bg-blue-50 ease-in-out duration-150 p-2 inline-block ">
                Forget password
              </p>
            </Link>
            <p className="text-lg ml-4 sm:ml-6 lg:ml-8 xl:ml-9  ">
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
              <p className="text-lg ml-4 sm:ml-6 lg:ml-8 xl:ml-9    text-red-500  p-2 inline-block ">
                {error ? error : ""}
              </p>
            ) : (
              ""
            )}

            <div className="w-[95%] mx-auto">
              <button
                type="submit"
                className=" w-full bg-blue-600 hover:bg-blue-800 duration-150 text-white text-xl font-semibold mt-8 p-3 rounded-xl"
              >
                login
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
