// import React from "react";

// const Calender = () => {
//   return <div>Calender</div>;
// };

// export default Calender;

// import React, { useState } from "react";
// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import { TextField } from "@mui/material";

// function Calender() {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date: any) => {
//     setSelectedDate(date);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         label="Select a date"
//         value={selectedDate}
//         onChange={handleDateChange}
//         renderInput={(params: any) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }

// export default Calender;

// import * as React from "react";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

// export default function ResponsiveDatePickers() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer
//         components={[
//           "DatePicker",
//           "MobileDatePicker",
//           "DesktopDatePicker",
//           "StaticDatePicker",
//         ]}
//       >
//         <DemoItem label="Static variant">
//           <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { schema } from "@/constants/Register";
import { BiSolidPencil } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


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
    console.log(e.$D, e.$M + 1, e.$y);
    setFormData({
      ...formData,
      date: { day: e.$D, month: e.$M + 1, year: e.$y },
    });
  };

  // console.log(formData);

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

  return (
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
      <div className="flex justify-end mt-5">
        <button
          onClick={handleSubmit}
          className="border-blue-600 rounded-lg text-xl  text-blue-600 border-2 hover:bg-blue-50 duration-200 hover:!border-blue-500 h-10 w-24 font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
