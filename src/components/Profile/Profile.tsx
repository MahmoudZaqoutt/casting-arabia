import React from "react";
import Container from "@/components/Shared/Container/Container";
import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import UserInfoForm from "@/components/UserInfoForm/UserInfoForm";
import BasicInfoForm from "@/components/BasicInfoForm/BasicInfoForm";
import ProfileImage from "@/pages/creator/profile/ProfileImage/ProfileImage";
import { IPropsModal } from "@/interfaces/props/IPropsModal";

const Profile = (props: IPropsModal) => {
  console.log(props.token);
  return (
    <Container>
      <div className=" flex md:flex-row flex-col my-14 gap-x-20 lg:gap-x-36 ">
        <div className="mb-1 ">
          <ProfileImage
            token={props.token}
            profileImage={props.profileInfo.pendingAvatar}
          />
        </div>

        <div>
          <div className="flex  items-center gap-5 mb-10">
            <p className="text-3xl font-semibold">{props.profileInfo.name}</p>
            <UserInfoForm
              token={props.token}
              profileInfo={props.profileInfo}
              show={true}
            />
          </div>

          <div className="grid grid-cols-3 gap-10 ">
            <TitleAndSubTitle
              title="First Name"
              subTitle={props.profileInfo.firstName}
              className=" "
              classNameOfTitle="text-xl text-blue-600 !w-full"
              classNameOfSubTitle="text-xl !w-full"
            />
            <TitleAndSubTitle
              title="Last Name"
              subTitle={props.profileInfo.lastName}
              className="border-l-2 border-blue-200 pl-2 "
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Company Name"
              className="border-l-2 border-blue-200 pl-2 "
              subTitle={props.profileInfo.companyName}
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Phone"
              subTitle={props.profileInfo.phoneNumber}
              className="col-span-3"
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Email"
              className="col-span-3"
              subTitle={props.profileInfo.email}
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
          </div>

          <div className="flex  items-center gap-5 my-10">
            <p className="text-3xl font-semibold"> Basic Info</p>
            <BasicInfoForm
              token={props.token}
              profileInfo={props.profileInfo}
            />
          </div>

          <div className="grid grid-cols-3 gap-10 ">
            <TitleAndSubTitle
              title="Location"
              subTitle={props.profileInfo.city}
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Age"
              subTitle={`${
                2023 -
                Number(
                  props.profileInfo.dob.split("T").shift().split("-").shift()
                )
              } years`}
              className="border-l-2 border-blue-200 pl-2"
              classNameOfTitle="text-xl text-blue-600 "
              classNameOfSubTitle="text-xl"
            />
            <TitleAndSubTitle
              title="Gender"
              subTitle={props.profileInfo.gender}
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
