// import React, { useContext, useState } from "react";
// import { Uploader } from "uploader"; // Installed by "react-uploader".
// import { UploadDropzone } from "react-uploader";
// import Container from "@/components/Shared/Container/Container";
// import { MdOutlineModeEdit } from "react-icons/md";
// import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
// import Modall from "@/components/Shared/Modal/Modal";
// import UserInfoForm from "@/components/UserInfoForm/UserInfoForm";
// import BasicInfoForm from "@/components/BasicInfoForm/BasicInfoForm";
// import { UserInfoContext } from "@/contexts";
// import ProfileImage from "./ProfileImage/ProfileImage";

// const index = () => {
//   let UserInfo = useContext(UserInfoContext);
//   console.log(UserInfo);

//   console.log(UserInfo.FirstName);

//   const [img, setImg] = useState(null);
//   const uploader = Uploader({
//     apiKey: "free",
//   });

//   const options = { multi: false };
//   const onUpdate = (files: any) => {
//     setImg(files[0].fileUrl);
//   };

//   return (
//     <Container>
//       <div className=" flex md:flex-row flex-col my-14 gap-x-20 lg:gap-x-36 ">
//         <div className="mb-1 ">
//           {/* <UploadDropzone
//             uploader={uploader}
//             options={options}
//             onUpdate={onUpdate}
//             width="300px"
//             height="375px"
//           /> */}
//           <ProfileImage />
//         </div>

//         <div className="">
//           <div className="flex  items-center gap-5 mb-10">
//             <p className="text-3xl font-semibold">
//               {UserInfo.FirstName} Casting
//             </p>
//             <Modall
//               modalClassName="!w-[85%]  -mt-10"
//               buttonClassName="hover:bg-blue-50 rounded-full  p-1 duration-200"
//               modalName={
//                 <MdOutlineModeEdit className=" text-3xl text-blue-600 " />
//               }
//               modalContent={<UserInfoForm show={true} />}
//             />
//           </div>

//           <div className="grid grid-cols-3 gap-10 ">
//             <TitleAndSubTitle
//               title="First Name"
//               subTitle={UserInfo.FirstName}
//               className="border-r-2 border-blue-200 "
//               classNameOfTitle="text-xl text-blue-600 !w-full"
//               classNameOfSubTitle="text-xl !w-full"
//             />
//             <TitleAndSubTitle
//               title="Last Name"
//               subTitle={UserInfo.LastName}
//               className="border-r-2 border-blue-200 "
//               classNameOfTitle="text-xl text-blue-600 "
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Company Name"
//               subTitle={UserInfo.CompanyName}
//               classNameOfTitle="text-xl text-blue-600 "
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Phone"
//               subTitle={UserInfo.PhoneNumber}
//               className="col-span-3"
//               classNameOfTitle="text-xl text-blue-600 "
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Email"
//               subTitle={UserInfo.email}
//               classNameOfTitle="text-xl text-blue-600 "
//               classNameOfSubTitle="text-xl"
//             />
//           </div>

//           <div className="flex  items-center gap-5 my-10">
//             <p className="text-3xl font-semibold"> Basic Info</p>
//             <Modall
//               modalClassName="!w-[85%] -mt-10"
//               buttonClassName="hover:bg-blue-50 rounded-full p-1 duration-200"
//               modalName={
//                 <MdOutlineModeEdit className=" text-3xl text-blue-600 " />
//               }
//               modalContent={<BasicInfoForm />}
//             />
//           </div>

//           <div className="grid grid-cols-3 gap-10 ">
//             <TitleAndSubTitle
//               title="Location"
//               subTitle="Jalālābād جلال آباد "
//               className="border-r-2 border-blue-200"
//               classNameOfTitle="text-xl text-blue-600 "
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Age"
//               subTitle="4 years"
//               className="border-r-2 border-blue-200"
//               classNameOfTitle="text-xl text-blue-600 "
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Gender"
//               subTitle="Male"
//               classNameOfTitle="text-xl text-blue-600 "
//               classNameOfSubTitle="text-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default index;

import Profile from "@/components/Profile/Profile";
import React from "react";

const index = () => {
  return <Profile />;
};

export default index;
