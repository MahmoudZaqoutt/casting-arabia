import React, { useEffect, useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import { DatePicker } from "antd";
import { countries } from "@/constants/countries";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { BiSolidPencil } from "react-icons/bi";
import {
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const currentDate = dayjs();
  const { RangePicker } = DatePicker;
  const [errors, setErrors] = useState<any>([]);
  const [data, setData] = useState<any>();
  const [formData, setFormData] = useState<any>({
    description: "",
    location: "",
    shootingAvailability: [],
    auditionDates: [],
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
            console.log(res);
            setData(res.data);
          }
        } catch (error) {}
      }
    })();
  }, [router.query.id, router.query.id2]);

  useEffect(() => {
    if (data) {
      setFormData({
        ...formData,
        description: data?.description,
        location: data?.location,
        auditionDates: [
          data.auditionDates?.map((item: any) => item.split("T").shift()),
        ],
      });
    }
  }, [data]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e: any) => {
    const startDate = dayjs(`${e[0].$y}-${e[0].$M + 1}-${e[0].$D}`);
    const endDate = dayjs(`${e[1].$y}-${e[1].$M + 1}-${e[1].$D}`);
    const startMonthName = startDate.format("MMM");
    const endMonthName = endDate.format("MMM");

    setFormData({
      ...formData,
      shootingAvailability: [
        `${e[0].$D}-${startMonthName}-${e[0].$y}`,
        `${e[1].$D}-${endMonthName}-${e[1].$y}`,
      ],
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

  const [date, setDate] = React.useState<any>("20-Aug-2023");

  const handleChangeDate = (e: any) => {
    const selectedDate = dayjs(`${e.$y}-${e.$M + 1}-${e.$D}`);
    const monthName = selectedDate.format("MMM");
    setDate(`${e.$y}-${e.$M + 1}-${e.$D}`);
  };

  const handleDateSubmit = (event: any) => {
    event.preventDefault();
    setFormData({
      ...formData,
      auditionDates: [...formData.auditionDates, date],
    });
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (dateToDelete: string) => {
    const updatedAuditionDates = formData.auditionDates.filter(
      (date: string) => date !== dateToDelete
    );
    setFormData({ ...formData, auditionDates: updatedAuditionDates });
  };

  console.log(formData);

  return (
    <Container>
      <div className="my-12">
        <p className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10">
          Role Details
        </p>
        <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
          <div>
            <Textarea
              value={formData.description}
              onChange={handleInputChange}
              name="description"
              minRows={7}
              className="sm:w-[500px] "
              placeholder="Role Description"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.description && errors.description}
            </p>
          </div>

          <div className="mb-5">
            <DropDownList
              value={formData.location}
              onChange={handleInputChange}
              options={countries}
              label="Filming City"
              name="location"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.location && errors.location}
            </p>
          </div>

          <div className="flex justify-between items-center mb-10">
            <p className="text-lg">Audition/Meeting Dates</p>
            <div>
              <button onClick={handleClickOpen}>
                <p className="text-blue-600 text-xl border-2 border-blue-600 rounded-lg px-3 py-1  ">
                  +Add
                </p>{" "}
              </button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle className="text-md">SELECT DATE</DialogTitle>
                <DialogContent className=" sm:w-[370px] md:w-[400px]">
                  <div>
                    <div className="flex justify-between items-center mt-10">
                      <p className="text-lg">{date}</p>
                      <button className="text-3xl hover:bg-blue-50 duration-200 rounded-full p-2">
                        <BiSolidPencil />
                        {""}
                      </button>
                    </div>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar
                        onChange={handleChangeDate}
                        minDate={currentDate}
                        defaultValue={dayjs("2023-08-20")}
                      />
                    </LocalizationProvider>
                  </div>
                </DialogContent>
                <DialogActions>
                  <button
                    onClick={handleDateSubmit}
                    className="border-blue-600 rounded-lg text-xl  text-blue-600 border-2 hover:bg-blue-50 duration-200 hover:!border-blue-500 h-10 w-24 font-semibold"
                  >
                    Submit
                  </button>
                </DialogActions>
              </Dialog>
            </div>
          </div>

          <div className="flex items-center gap-5 !w-[500px] ">
            {formData.auditionDates?.map((item: string, index: number) => (
              <div key={index}>
                <Chip label={item} onDelete={() => handleDelete(item)} />
              </div>
            ))}
          </div>

          <div className="w-full mb-5">
            <p className="text-lg mb-5">Filming Availability</p>
            <div>
              <RangePicker
                onChange={handleDateChange}
                className="sm:w-[500px] h-14"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="border-2 border-blue-500 rounded-md text-lg text-blue-600 px-4 py-1 font-semibold hover:bg-blue-100 duration-200">
              Save For Later
            </button>
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.description && formData.location !== "" ? (
                <Link
                  href={`/creator/opportunities/${router.query.id}/roles/${router.query.id2}/edit/step-four`}
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
