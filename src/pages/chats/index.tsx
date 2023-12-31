import Container from "@/components/Shared/Container/Container";
import React, { useState } from "react";
import ChatAccount from "./ChatAccount/ChatAccount";
import UploadImage from "./UploadImage/UploadImage";

import { IoSendSharp } from "react-icons/io5";
import { Button } from "antd";

const index = () => {
  const [status, setStatus] = useState("Connected");
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setStatus(value);
  };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
    "HiHiHiHiHiHiHiHiHiHiHiHHiHiHiiHiHiHiHiiHiHiHiHiHiHi",
    "Hi",
    "Hi",
    "Hi",
    "Hi",
  ]);

  const handleChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = (e: any) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage("");
    console.log(messages);
  };

  return (
    <Container>
      <p className="text-4xl text-blue-600 font-semibold mt-[40px]">Messages</p>
      <div className="bg-white rounded-xl border-[1px] border-blue-400 w-full min-h-[436px] my-8 flex flex-col-reverse sm:grid sm:grid-cols-7">
        <div className=" sm:h-full sm:col-span-5 flex flex-col ">
          {/* <p className=" text-lg h-full flex items-center justify-center">
            Select a conversation...
          </p> */}
          <div className="p-4">
            <ChatAccount
              ImageClassName="!w-20 !h-20"
              list="list"
              onChange={handleInputChange}
              status={status}
            />
          </div>
          <div className=" sm:w-[98%] h-60 overflow-y-scroll flex flex-col  items-end gap-1 py-2  border-t-[1px] border-b-[1px] border-blue-400">
            {messages.map((item: any, index) => (
              <div key={index}>
                <p className=" bg-blue-600 inline-block p-2 mx-2 rounded-xl text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className=" h-12  flex gap-5 !w-full items-center">
            <div className="w-10 h-full mt-2 ml-2">
              <UploadImage />
            </div>

            <div className="w-full">
              <input
                value={message}
                onChange={handleChangeMessage}
                type="text"
                title="."
                className="outline-none h-full text-xl !w-full"
                placeholder="Message"
              />
            </div>
            <div>
              <Button
                onClick={handleSubmitMessage}
                className="text-3xl text-blue-600 mr-2 border-none pb-1"
              >
                <IoSendSharp />
              </Button>
            </div>
          </div>
        </div>
        <div className="  sm:col-span-2">
          <p className="text-3xl  font-semibold mt-4">Contacts</p>
          <div className="mt-7 border-t-[1px] border-blue-400 pt-3 flex flex-col gap-4">
            <ChatAccount />
            <ChatAccount />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;
