import React from "react";
import type { UploadProps } from "antd";
import { Button, Upload } from "antd";
import { AiOutlinePlusCircle } from "react-icons/ai";

const props: UploadProps = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
};

const UploadImage: React.FC = () => (
  <Upload {...props}>
    <Button
      className="border-none"
      icon={<AiOutlinePlusCircle className="text-3xl text-blue-600 " />}
    ></Button>
  </Upload>
);

export default UploadImage;
