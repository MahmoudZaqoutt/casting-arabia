import React, { useContext, useState } from "react";
import Container from "@/components/Shared/Container/Container";
import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import ProfileImage from "@/pages/creator/profile/ProfileImage/ProfileImage";
import { UserInfoContext } from "@/contexts";
import { FaImdb } from "react-icons/fa";
import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks ";
import Modall from "@/components/Shared/Modal/Modal";
import SkillsModalForm from "@/components/Shared/SkillsModalForm/SkillsModalForm";
import Tab from "./Tabs/Tab";

FaImdb;
const index = () => {
  let UserInfo = useContext(UserInfoContext);
  console.log(UserInfo);

  console.log(UserInfo.FirstName);

  return (
    <Container>
      <div className=" flex md:flex-row flex-col my-14 gap-x-20 lg:gap-x-36 ">
        <div className="mb-1 ">
          <ProfileImage />

          <div>
            <p className="font-semibold text-2xl">Links</p>
            <SocialMediaLinks />
          </div>
        </div>

        <div>
          <div className="flex  items-center gap-5 mb-10">
            <p className="text-3xl font-semibold">
              {UserInfo.FirstName} Casting
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 ">
            <TitleAndSubTitle
              title="First Name"
              subTitle={UserInfo.FirstName}
              className=""
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

          <p className="text-3xl font-semibold my-10"> Basic Info</p>

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
            <div className="flex flex-col items-start">
              <p className="text-3xl font-semibold my-10">Skills</p>

              <div className="flex gap-10">
                <Modall
                  modalContent={<SkillsModalForm />}
                  modalName={
                    <p className="text-xl font-semibold text-[#81aee9] rounded-full border-2 p-2">
                      Aerobics
                    </p>
                  }
                />
                <Modall
                  modalContent={<SkillsModalForm />}
                  modalName={
                    <p className="text-xl font-semibold text-[#8fb7ea] rounded-full border-2 p-2">
                      Accordion
                    </p>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tab />
    </Container>
  );
};

export default index;
