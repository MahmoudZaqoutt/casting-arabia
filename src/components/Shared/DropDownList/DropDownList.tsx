import React from "react";
import { IPropsDropDownList } from "@/interfaces/props/IPropsDropDownList";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const DropDownList = (props: IPropsDropDownList) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={props.name}>{props.label}</InputLabel>
      <Select
        name={props.name}
        id={props.id}
        value={props.value}
        label={props.label}
        title={props.label}
        onChange={props.onChange}
        className={`w-full ${props.className}`}
      >
        {props.options?.map((item: any, index) => (
          <MenuItem key={index} value={item.title ? item.title : item}>
            {item.title ? item.title : item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownList;
