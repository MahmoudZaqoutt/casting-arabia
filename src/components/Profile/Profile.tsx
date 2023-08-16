import React, { useContext, useState } from "react";
import Container from "@/components/Shared/Container/Container";
import { MdOutlineModeEdit } from "react-icons/md";
import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import Modall from "@/components/Shared/Modal/Modal";
import UserInfoForm from "@/components/UserInfoForm/UserInfoForm";
import BasicInfoForm from "@/components/BasicInfoForm/BasicInfoForm";
import ProfileImage from "@/pages/creator/profile/ProfileImage/ProfileImage";
import { UserInfoContext } from "@/contexts";

const Profile = () => {
  let UserInfo = useContext(UserInfoContext);
  console.log(UserInfo);

  console.log(UserInfo.FirstName);

  return (
    <Container>
      <div className=" flex md:flex-row flex-col my-14 gap-x-20 lg:gap-x-36 ">
        <div className="mb-1 ">
          <ProfileImage />
        </div>

        <div className="">
          <div className="flex  items-center gap-5 mb-10">
            <p className="text-3xl font-semibold">
              {UserInfo.FirstName} Casting
            </p>
            <Modall
              modalClassName="!w-[85%]  -mt-10"
              buttonClassName="hover:bg-blue-50 rounded-full  p-1 duration-200"
              modalName={
                <MdOutlineModeEdit className=" text-3xl text-blue-600 " />
              }
              modalContent={<UserInfoForm show={true} />}
            />
          </div>

          <div className="grid grid-cols-3 gap-10 ">
            <TitleAndSubTitle
              title="First Name"
              subTitle={UserInfo.FirstName}
              className=" "
              classNameOfTitle="text-xl text-blue-600 !w-full"
              classNameOfSubTitle="text-xl !w-full"
            />
            <TitleAndSubTitle
              title="Last Name"
              subTitle={UserInfo.LastName}
              className="border-l-2 border-blue-200 pl-2 "
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Company Name"
              className="border-l-2 border-blue-200 pl-2 "
              subTitle={UserInfo.CompanyName}
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Phone"
              subTitle={UserInfo.PhoneNumber}
              className="col-span-3"
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Email"
              className="col-span-3"
              subTitle={UserInfo.email}
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
          </div>

          <div className="flex  items-center gap-5 my-10">
            <p className="text-3xl font-semibold"> Basic Info</p>
            <Modall
              modalClassName="!w-[85%] -mt-10"
              buttonClassName="hover:bg-blue-50 rounded-full p-1 duration-200"
              modalName={
                <MdOutlineModeEdit className=" text-3xl text-blue-600 " />
              }
              modalContent={<BasicInfoForm />}
            />
          </div>

          <div className="grid grid-cols-3 gap-10 ">
            <TitleAndSubTitle
              title="Location"
              subTitle="Jalālābād جلال آباد "
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Age"
              subTitle="4 years"
              className="border-l-2 border-blue-200 pl-2"
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Gender"
              subTitle="Male"
              className="border-l-2 border-blue-200 pl-2"
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
