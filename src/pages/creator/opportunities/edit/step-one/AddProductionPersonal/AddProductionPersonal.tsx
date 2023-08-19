// import React from 'react'

// const AddProductionPersonal = () => {
//   return (
//     <div>AddProductionPersonal</div>
//   )
// }

// export default AddProductionPersonal

import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { TextField } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const AddProductionPersonal: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form
      name="dynamic_form_item"
      //   {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 0) {
                return Promise.reject(new Error("At least 1  passengers"));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                // {...(index === 0 ? formItemLayoutWithOutLabel : formItemLayoutWithOutLabel)}
                label={index === 0 ? "" : ""}
                required={false}
                key={field.key}
                className="sm:w-[500px]"
              >
                <div className="flex items-center">
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input passenger's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <TextField
                      label="Production Personal"
                      variant="standard"
                      placeholder="Production Personal"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  {fields.length > 0 ? (
                    <AiOutlineClose
                      className="cursor-pointer dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </div>
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                onClick={() => add()}
                className="border-blue-600 sm:w-[40%]"
              >
                <p className="flex items-center gap-2 text-blue-600 font-semibold">
                  <PlusOutlined />
                  Production Personal
                </p>
              </Button>

              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      {/* <Form.Item>
         <Button type="primary" htmlType="submit">
          Submit
        </Button> 
      </Form.Item> */}
    </Form>
  );
};

export default AddProductionPersonal;
// .dynamic-delete-button {
//   position: relative;
//   top: 4px;
//   margin: 0 8px;
//   color: #999;
//   font-size: 24px;
//   cursor: pointer;
//   transition: all 0.3s;
// }
// .dynamic-delete-button:hover {
//   color: #777;
// }
// .dynamic-delete-button[disabled] {
//   cursor: not-allowed;
//   opacity: 0.5;
// }
