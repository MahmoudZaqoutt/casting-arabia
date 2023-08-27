import React, { useState } from "react";
import { TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Container from "@/components/Shared/Container/Container";
import { schema } from "@/constants/Register";
import Link from "next/link";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { AiOutlineClose } from "react-icons/ai";

const index = () => {
  const [errors, setErrors] = useState<any>([]);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    productionPersonnel: [],
    productionDescription: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handle = (e: any, index: number) => {
    const { value } = e.target;
    const updatedProductionPersonnel: any = [...formData.productionPersonnel];
    updatedProductionPersonnel[index] = value;
    setFormData({
      ...formData,
      productionPersonnel: updatedProductionPersonnel,
    });
  };

  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  console.log(formData);

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
          "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/2048",
          {
            title: formData.title,
            company: formData.company,
            productionPersonnel: formData.productionPersonnel.join(","),
            productionDescription: formData.productionDescription,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(res);
      } catch (error: any) {
        console.log(error);
      }
    })();
  };
  return (
    <Container>
      <div className="my-12">
        <p className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10">
          Posting an Opportunity
        </p>
        <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
          <div>
            <TextField
              value={formData.title}
              onChange={handleInputChange}
              name="title"
              label="Title of Production"
              variant="standard"
              placeholder="Production Personal"
              className="sm:w-[500px]"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.title && errors.title}
            </p>
          </div>

          <div>
            <TextField
              value={formData.company}
              onChange={handleInputChange}
              name="company"
              label="Production Company"
              variant="standard"
              placeholder="Production Company"
              className="sm:w-[500px]"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.company && errors.company}
            </p>
          </div>

          <div>
            <Form
              name="dynamic_form_item"
              onFinish={onFinish}
              style={{ maxWidth: 600 }}
            >
              <Form.List
                name="names"
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 0) {
                        return Promise.reject(
                          new Error("At least 1  passengers")
                        );
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
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
                              name={`productionPersonnel[${index}]`}
                              label="Production Personnel"
                              variant="standard"
                              placeholder="Production Personnel"
                              style={{ width: "100%" }}
                              value={formData.productionPersonnel[index] || ""}
                              onChange={(e) => handle(e, index)}
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
            </Form>
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.productionPersonnel && errors.productionPersonnel}
            </p>
          </div>

          <div>
            <Textarea
              value={formData.productionDescription}
              onChange={handleInputChange}
              name="productionDescription"
              minRows={7}
              className="sm:w-[500px] "
              placeholder="Production Description"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.productionDescription && errors.productionDescription}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="border-2 border-blue-500 rounded-md text-lg text-blue-600 px-4 py-1 font-semibold hover:bg-blue-100 duration-200">
              <Link href={"/creator"}>Save For Later</Link>
            </button>
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.title &&
              formData.company &&
              formData.productionDescription !== "" ? (
                <Link href={"/creator/opportunities/edit/step-two"}>
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
