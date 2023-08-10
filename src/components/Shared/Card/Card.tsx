// import Image from "next/image";
// import React from "react";
// import TitleAndSubTitle from "../TitleAndSubTitle/TitleAndSubTitle";
// import {
//   BsFillPersonFill,
//   BsFillCheckCircleFill,
//   BsFillXCircleFill,
// } from "react-icons/bs";

// import img from "../../../assets/Rectangle16.png";
// import { IPropsCard } from "@/interfaces/props/IPropsCard";
// const Card = (props: IPropsCard) => {
//   return (
//     // "w-[20.313rem]  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 "
//     <div className={props.className}>
//       <Image src={img} alt="img" className="w-full h-[10rem]" />
//       <div className="flex flex-col gap-5 justify-between mt-5 h-auto">
//         <TitleAndSubTitle
//           title={props.title}
//           subTitle={props.subTitle}
//           classNameOfTitle="  font-semibold"
//           classNameOfSubTitle="text-sm text-gray-500"
//         />
//         {props.Icon ? (
//           <div className="text-sm flex gap-3  ">
//             {props.paid ? (
//               <div className="flex items-center gap-2 bg-green-200 px-4 py-2 rounded-full text-green-600">
//                 <BsFillCheckCircleFill />
//                 <p>Paid</p>
//               </div>
//             ) : (
//               <div className="flex items-center gap-2 bg-red-200 px-4 py-2 rounded-full text-red-600">
//                 <BsFillXCircleFill />
//                 <p>Not Paid</p>
//               </div>
//             )}

//             <div className="flex items-center gap-2 bg-blue-200 px-4 py-2 rounded-full text-blue-600">
//               <BsFillPersonFill />
//               <p>One Role</p>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;
