import Container from "@/components/Shared/Container/Container";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import ReviewCard from "./ReviewCard/ReviewCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const index = () => {
  const [selectedData, setSelectedData] = useState({
    Opportunities: "",
    Roles: "",
    Status: "",
  });
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [connect, setConnect] = useState(true);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setSelectedData({ ...selectedData, [name]: value });
  };

  const handleChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    console.log(swiper.activeIndex);
  };

  const handleConnect = () => {
    setConnect(false);
  };
  const handleReject = () => {
    setConnect(true);
  };
  return (
    <div className="py-10 bg-blue-200">
      <Container>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6  ">
            <div className="sm:w-56 w-full">
              <DropDownList
                options={["All", "مطلوب عازف عود محترف للمشاركة في عرض"]}
                label="Opportunities"
                name="Opportunities"
                value={selectedData.Opportunities}
                onChange={handleInputChange}
              />
            </div>
            <div className="sm:w-56 w-full">
              <DropDownList
                options={["All", "عازف"]}
                label="Roles"
                name="Roles"
                value={selectedData.Roles}
                onChange={handleInputChange}
              />
            </div>
            <div className="sm:w-56 w-full">
              <DropDownList
                options={[
                  "All",
                  "Connected",
                  "Archived",
                  "Pending",
                  "Scheduled",
                  "Hired",
                  "Rejected",
                ]}
                value={selectedData.Status}
                onChange={handleInputChange}
                label="Status"
                name="Status"
              />
            </div>
          </div>
          <div className="py-20 flex">
            {isBeginning ? (
              <button
                title="'"
                className="prev hidden md:block text-[#ccc3c3] cursor-not-allowed "
              >
                <AiOutlineArrowLeft className=" text-6xl " />
              </button>
            ) : (
              <button title="s" className="next hidden md:block text-blue-700 ">
                <AiOutlineArrowLeft className="  text-6xl bg-blue-50 rounded-full p-1 hover:bg-blue-100 duration-200 " />
              </button>
            )}

            <Swiper
              onSlideChange={handleChange}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={{
                nextEl: `.next`,
                prevEl: `.prev`,
                enabled: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide className="!w-80  !shadow-2xl">
                <ReviewCard status={connect} />
              </SwiperSlide>
              <SwiperSlide className="!w-80  !shadow-2xl">
                <ReviewCard status={connect} />
              </SwiperSlide>
            </Swiper>
            {isEnd ? (
              <button
                title="s"
                className={`next hidden md:block text-[#ccc3c3] cursor-not-allowed`}
              >
                <AiOutlineArrowRight className=" text-6xl" />
              </button>
            ) : (
              <button
                title="s"
                className={`next hidden md:block text-blue-700`}
              >
                <AiOutlineArrowRight className=" text-6xl bg-blue-50 rounded-full p-1 hover:bg-blue-100 duration-200" />
              </button>
            )}
          </div>

          <div className="flex justify-center gap-5">
            {connect ? (
              <>
                <button
                  onClick={handleConnect}
                  className="text-2xl font-semibold border-green-500 text-green-600 border-2 p-2 rounded-full "
                >
                  Connect
                </button>
                <button
                  disabled
                  className="text-2xl font-semibold border-gray-400 text-gray-500 border-2 p-2 rounded-full "
                >
                  Chat
                </button>
              </>
            ) : (
              <>
                <button className="text-2xl font-semibold border-blue-400 text-blue-500 border-2 p-2 rounded-full ">
                  <Link href={"/chats"}> Chat</Link>
                </button>
                <button
                  onClick={handleReject}
                  className="text-2xl font-semibold border-red-500 text-red-600 border-2 p-2 rounded-full "
                >
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
