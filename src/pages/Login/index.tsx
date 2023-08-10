import Link from "next/link";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import Container from "@/components/Shared/Container/Container";

const Login = () => {
  // const schema = yup.object().shape({
  //   email: yup.string().email("Invalid email").required("Email is required"),
  //   password: yup.string().required("Password is required"),
  // });
  // const handelSubmit = async (e: any) => {
  //   e.preventDefault();
  //   schema
  //     .validate(
  //       { email: data.email, password: data.password },
  //       { abortEarly: false }
  //     )
  //     .then(async () => {
  //       //   this.setState({ isLoading: true });
  //       //   const response = await axios.post(
  //       //     "https://dummyjson.com/auth/login",
  //       //     mayData
  //       //   );
  //       //   if (response) {
  //       //     this.props.login();
  //       //     localStorage.setItem("token", response.data.token);
  //       //     localStorage.setItem("username", response.data.username);
  //       //     // console.log(response.data.username)
  //       //     // this.setState({isLogin:true})
  //       //   }
  //       //   // else{
  //       //   // this.setState({isLoading:false})
  //       //   // }
  //       //   // console.log(response)
  //     })
  //     .catch((error) => {
  //       if (error.errors) {
  //         console.log(error.errors);
  //         // this.setState({ error: error.errors });
  //         // this.setState({ isLoading: false });
  //       } else {
  //         // this.setState({ error: [error.message] });
  //         // this.setState({ isLoading: false });
  //       }
  //     });
  // };

  const [errors, setErrors] = useState<any>([]);

  const [formData, setFormData] = useState({
    email: "",
    Password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("required"),
    Password: yup.string().required("required"),
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        console.log("Form data is valid:", formData);
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
      <div className=" min-h-[450px] rounded-xl shadow-xl bg-white mt-[8rem] pb-10 mb-16">
        <p className="text-3xl pt-8 text-center">login</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center gap-2  pt-8">
            <div className="w-[95%] ">
              <TextField
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
              <TextField
                name="Password"
                label="Password"
                type="Password"
                title="Password"
                onChange={handleInputChange}
                className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg"
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.Password ? errors.Password : ""}
              </p>
            </div>
          </div>
          <Link href={"/ForgetPassword"}>
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
  );
};

export default Login;
