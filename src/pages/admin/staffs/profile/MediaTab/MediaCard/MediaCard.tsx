import React from "react";
import styled from "styled-components";
import imageSrc from "../../../../../../assets/Rectangle16.png";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const CardContainer = styled.div`
  width: 240px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const CardDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  ${CardContainer}:hover & {
    transform: translateY(0);
  }
`;

const CardTitle = styled.h2`
  font-size: 25px;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin: 8px 0;
`;
const MediaCard = () => {
  return (
    <>
      <CardContainer>
        <Image
          className="img"
          style={{
            width: "100%",
            height: "100%",
            transition: "transform 0.3s ease-in-out",
          }}
          src={imageSrc}
          alt={"title"}
        />
        <CardDetails>
          <CardTitle>{"UNKNOWN"}</CardTitle>
          <CardDescription>
            <AiOutlineClose className=" text-red-600 text-3xl ml-24" />
          </CardDescription>
        </CardDetails>
      </CardContainer>
    </>
  );
};

export default MediaCard;
