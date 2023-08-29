import React, { useEffect, useState } from "react";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/router";
import axios from "axios";
import dayjs from "dayjs";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Switch } from "@mui/material";
import ToolTip from "@/components/Shared/ToolTip/ToolTip";

const index = () => {
  const currentDate = dayjs();
  const router = useRouter();
  const [myRoles, setMyRoles] = useState<any>([]);
  const [errors, setErrors] = useState<any>([]);
  const [expirationDate, setExpirationDate] = useState("");

  const handleDateChange = (e: any) => {
    setExpirationDate(`${e.$y}-${e.$M + 1}-${e.$D}`);
  };
  const handleSubmit = (event: any) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    schema
      .validate(expirationDate, { abortEarly: false })
      .then(() => {
        console.log("Form data is valid:", expirationDate);
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
        const response = await axios.put(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}`,
          { expirationDate: expirationDate },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const handleDynamicRoute = (e: any) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    (async () => {
      try {
        const response = await axios.post(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}/roles`,
          {
            name: "",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data && response.data.id) {
          router.push(
            `/creator/opportunities/${router.query.id}/roles/${response.data.id}/edit/step-one`
          );
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (router.query.id) {
          const res = await axios.get(
            `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (res) {
            setMyRoles(res.data.roles);
            console.log(res.data);
          }
        }
      } catch (error) {}
    })();
  }, [router.query.id]);

  const handleCheckSwitch = async (id: any) => {
    const token = localStorage.getItem("token");

    try {
      const updatedRoles = myRoles.map((role: any) => {
        if (role.id === id) {
          const newStatus = role.status === "opened" ? "closed" : "opened";
          return { ...role, status: newStatus };
        }
        return role;
      });

      setMyRoles(updatedRoles);

      const res = await axios.put(
        `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}/roles/${id}`,
        { status: updatedRoles.find((role: any) => role.id === id)?.status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (id: any) => {
    router.push(
      `/creator/opportunities/${router.query.id}/roles/${id}/edit/step-one`
    );
  };

  const handleDelete = async (id: any) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(
        `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}/roles/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        setMyRoles(myRoles.filter((item: any) => item.id !== id));
      }
    } catch (error) {}
  };

  return (
    <Container>
      <div className="my-12">
        <p className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10">
          Posting an Opportunity
        </p>
        <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
          <div className="flex sm:w-[500px] mx-auto justify-between items-center">
            <p className="text-xl text-gray-500   ">Role(s) You're Castig</p>

            <button
              onClick={handleDynamicRoute}
              className=" hover:bg-blue-50 duration-200 text-gray-500 rounded-full text-3xl"
            >
              <IoAddOutline /> {""}
            </button>
          </div>
          <div className="h-[200px] rounded-lg my-5 w-ful bg-white border-2 overflow-y-auto border-blue-100">
            <p className="text-xl p-4">Role Name</p>
            {myRoles.map((item: any, index: any) => (
              <div
                key={index}
                className="border-b-[1px] border-blue-200 p-3 flex justify-between items-center"
              >
                <p className="text-xl">{item.name}</p>
                <div className="flex items-center gap-1">
                  <div className="flex items-center ">
                    <p className="text-xl">{item.status}</p>
                    <Switch
                      checked={item.status === "opened"}
                      onChange={() => handleCheckSwitch(item.id)}
                    />
                  </div>
                  <ToolTip
                    toolTipContent={
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-2xl text-blue-600 font-semibold hover:bg-blue-100 rounded-full duration-200 w-8 p-1 h-8"
                      >
                        <MdModeEditOutline /> {""}
                      </button>
                    }
                    toolTipToShow="Edit"
                  />

                  <ToolTip
                    toolTipContent={
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-2xl text-red-600 font-semibold hover:bg-blue-100 rounded-full duration-200 w-8 p-1 h-8"
                      >
                        <AiOutlineClose /> {""}
                      </button>
                    }
                    toolTipToShow="Delete"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                minDate={currentDate}
                label="When should this listing expire?"
                className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg  border-none"
                onChange={handleDateChange}
              />
            </LocalizationProvider>
          </div>

          <div className="flex items-center gap-4">
            <button className="border-2 border-blue-500 rounded-md text-lg text-blue-600 px-4 py-1 font-semibold hover:bg-blue-100 duration-200">
              Save For Later
            </button>
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {expirationDate !== "" ? (
                <Link
                  href={`/creator/opportunities/${router.query.id}/edit/summary`}
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
