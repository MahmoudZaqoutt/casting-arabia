import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { BiSolidPencil } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function BasicDateCalendar() {
  const currentDate = dayjs();
  const [errors, setErrors] = React.useState<any>([]);
  const [dateManually, setDateManually] = React.useState<any>(true);

  const [formData, setFormData] = React.useState({
    date: { day: "", month: "", year: "" },
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e: any) => {
    setFormData({
      ...formData,
      date: { day: e.$D, month: e.$M + 1, year: e.$y },
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem("date", JSON.stringify(formData));
  };

  const handleDate = (event: any) => {
    event.preventDefault();
    setDateManually(true);
  };

  const handleDateManually = (event: any) => {
    event.preventDefault();
    setDateManually(false);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
            {dateManually ? (
              <>
                <div className="flex justify-between items-center mt-10">
                  <p className="text-lg">
                    {formData.date.day ? formData.date.day : 20} ,
                    {formData.date.month ? formData.date.month : 8} ,
                    {formData.date.year ? formData.date.year : 2023}
                  </p>

                  <button
                    onClick={handleDateManually}
                    className="text-3xl hover:bg-blue-50 duration-200 rounded-full p-2"
                  >
                    <BiSolidPencil />
                    {""}
                  </button>
                </div>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    onChange={handleDateChange}
                    minDate={currentDate}
                    defaultValue={dayjs("2023-08-20")}
                  />
                </LocalizationProvider>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center mt-10 mb-5">
                  <p className="text-lg">
                    {formData.date.day ? formData.date.day : 20} ,
                    {formData.date.month ? formData.date.month : 8} ,
                    {formData.date.year ? formData.date.year : 2023}
                  </p>

                  <button
                    onClick={handleDate}
                    className="text-3xl hover:bg-blue-50 duration-200 rounded-full p-2"
                  >
                    <AiFillCalendar />
                    {""}
                  </button>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    onChange={handleDateChange}
                    minDate={currentDate}
                    value={dayjs("2023-08-20")}
                  />
                </LocalizationProvider>
              </>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleSubmit}
            className="border-blue-600 rounded-lg text-xl  text-blue-600 border-2 hover:bg-blue-50 duration-200 hover:!border-blue-500 h-10 w-24 font-semibold"
          >
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
