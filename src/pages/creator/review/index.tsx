import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import React from "react";

const index = () => {
  return (
    <div className="pt-10">
      <div>
        <DropDownList options={[]} label="Opportunities" name="" />
        <DropDownList options={[]} label="Roles" name="" />
        <DropDownList options={[]} label="" name="Status" />
      </div>
    </div>
  );
};

export default index;
