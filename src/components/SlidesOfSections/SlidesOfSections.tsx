// import React from "react";
// import { Navigation } from "swiper/modules";
// import Card from "../Shared/Card/Card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Container from "../Shared/Container/Container";
// import { useState } from "react";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import Link from "next/link";
// import { IPropsSlide } from "@/interfaces/props/IPropsSlide";
// import SimpleDialogDemo from "../SimpleDialogDemo/SimpleDialogDemo";

// const SlidesOfSections = (props: IPropsSlide) => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   const handleChange = (swiper: any) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };
//   return (
//     <Container>
//       <div className="bg-white p-5 mt-5 rounded-3xl" id={props.id}>
//         <div className="flex justify-between  items-center mt-[24px] mb-[24px]">
//           <p className="text-2xl font-semibold text-blue-700">{props.title}</p>

//           <div className="flex items-center gap-4">
//             {isBeginning ? (
//               <button
//                 title="'"
//                 className={`prev${props.id} hidden md:block text-[#ccc3c3] cursor-not-allowed `}
//               >
//                 <AiOutlineLeft className="w-7 h-7" />
//               </button>
//             ) : (
//               <button
//                 title="s"
//                 className={`next${props.id} hidden md:block text-blue-700`}
//               >
//                 <AiOutlineLeft className="w-7 h-7" />
//               </button>
//             )}

//             {isEnd ? (
//               <button
//                 title="s"
//                 className={`next${props.id} hidden md:block text-[#ccc3c3] cursor-not-allowed`}
//               >
//                 <AiOutlineRight className="w-7 h-7" />
//               </button>
//             ) : (
//               <button
//                 title="s"
//                 className={`next${props.id} hidden md:block text-blue-700`}
//               >
//                 {" "}
//                 <AiOutlineRight className="w-7 h-7" />
//               </button>
//             )}
//           </div>
//         </div>
//         <Swiper
//           onSlideChange={handleChange}
//           scrollbar={{ draggable: true }}
//           navigation={{
//             nextEl: `.next${props.id}`,
//             prevEl: `.prev${props.id}`,
//             enabled: true,
//           }}
//           modules={[Navigation]}
//           slidesPerView={4}
//           slidesPerGroup={1}
//           spaceBetween={30}
//           breakpoints={{
//             100: {
//               slidesPerView: 1,
//               slidesPerGroup: 1,
//             },
//             430: {
//               slidesPerView: 2,
//               slidesPerGroup: 1,
//               spaceBetween: 20,
//             },
//             537: {
//               slidesPerView: 2,
//               slidesPerGroup: 1,
//               spaceBetween: 20,
//             },
//             760: {
//               slidesPerView: 2,
//               slidesPerGroup: 1,
//               spaceBetween: 20,
//             },
//             850: {
//               slidesPerView: 3,
//               slidesPerGroup: 1,
//               spaceBetween: 10,
//             },
//             1250: {
//               slidesPerView: 4,
//               slidesPerGroup: 1,
//               spaceBetween: 20,
//             },
//           }}
//         >
//           <SwiperSlide className="!w-[20.313rem] ">
//             <Card
//               className="w-[20.313rem]  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 "
//               Icon={props.Icon}
//               paid={props.paid}
//               title="فيلم قصير _قلم، صفحة، وأستيكا"
//               subTitle="فيلم قلم وورقة وأستيكا هو فيلم قصير كوميدي مدته حوالي 15 دقيقة باللهجة..."
//             />
//           </SwiperSlide>
//           <SwiperSlide className="!w-[20.313rem] ">
//             <Card
//               className="w-[20.313rem]  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 "
//               Icon={props.Icon}
//               paid={props.paid}
//               title="فيلم قصير _قلم، صفحة، وأستيكا"
//               subTitle="فيلم قلم وورقة وأستيكا هو فيلم قصير كوميدي مدته حوالي 15 دقيقة باللهجة..."
//             />
//           </SwiperSlide>
//           <SwiperSlide className="!w-[20.313rem] ">
//             <Card
//               className="w-[20.313rem]  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 "
//               Icon={props.Icon}
//               paid={props.paid}
//               title="فيلم قصير _قلم، صفحة، وأستيكا"
//               subTitle="فيلم قلم وورقة وأستيكا هو فيلم قصير كوميدي مدته حوالي 15 دقيقة باللهجة..."
//             />
//           </SwiperSlide>
//           <SwiperSlide className="!w-[20.313rem] ">
//             <Card
//               className="w-[20.313rem]  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 "
//               Icon={props.Icon}
//               paid={props.paid}
//               title="فيلم قصير _قلم، صفحة، وأستيكا"
//               subTitle="فيلم قلم وورقة وأستيكا هو فيلم قصير كوميدي مدته حوالي 15 دقيقة باللهجة..."
//             />
//           </SwiperSlide>
//           <SwiperSlide className="!w-[20.313rem] ">
//             <Card
//               className="w-[20.313rem]  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 "
//               Icon={props.Icon}
//               paid={props.paid}
//               title="فيلم قصير _قلم، صفحة، وأستيكا"
//               subTitle="فيلم قلم وورقة وأستيكا هو فيلم قصير كوميدي مدته حوالي 15 دقيقة باللهجة..."
//             />
//           </SwiperSlide>
//           <SwiperSlide className="!w-[20.313rem] ">
//             <Card
//               className="w-[20.313rem]  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 "
//               Icon={props.Icon}
//               paid={props.paid}
//               title="فيلم قصير _قلم، صفحة، وأستيكا"
//               subTitle="فيلم قلم وورقة وأستيكا هو فيلم قصير كوميدي مدته حوالي 15 دقيقة باللهجة..."
//             />
//           </SwiperSlide>
//           <SwiperSlide className="!w-[20.313rem] ">
//             <Card
//               className="w-[20.313rem]  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 "
//               Icon={props.Icon}
//               paid={props.paid}
//               title="فيلم قصير _قلم، صفحة، وأستيكا"
//               subTitle="فيلم قلم وورقة وأستيكا هو فيلم قصير كوميدي مدته حوالي 15 دقيقة باللهجة..."
//             />
//           </SwiperSlide>
//           <SwiperSlide className="!w-[20.313rem] ">
//             <Card
//               className="w-[20.313rem]  max-h-[20.875rem] md:hover:scale-105 my-2 ease-in-out duration-150 "
//               Icon={props.Icon}
//               paid={props.paid}
//               title="فيلم قصير _قلم، صفحة، وأستيكا"
//               subTitle="فيلم قلم وورقة وأستيكا هو فيلم قصير كوميدي مدته حوالي 15 دقيقة باللهجة..."
//             />
//           </SwiperSlide>
//         </Swiper>
//         <div className="text-center">
//           {props.buttonContent ? (
//             <SimpleDialogDemo
//               content={props.buttonContent}
//               className="text-lg !text-center font-semibold text-blue-700 border-blue-400 border-2 px-5 py-2 inline-block rounded-xl hover:bg-blue-100 duration-150 mt-8"
//             />
//           ) : (
//             <Link href={`/${props.href}`}>
//               <p className="text-lg !text-center font-semibold text-blue-700 border-blue-400 border-2 px-5 py-2 inline-block rounded-xl hover:bg-blue-100 duration-150 mt-8">
//                 Show More
//               </p>
//             </Link>
//           )}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SlidesOfSections;
