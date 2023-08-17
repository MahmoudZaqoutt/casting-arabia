import React from "react";
import MediaCard from "../MediaCard/MediaCard";
import { IPropsMediaTab } from "@/interfaces/props/IPropsMediaTab";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

const MediaTabSections = (props: IPropsMediaTab) => {
  return (
    <div>
      <p className="font-semibold text-3xl my-10">{props.title}</p>
      <div className=" gap-8 hidden md:flex">
        <MediaCard />
        <MediaCard />
      </div>

      <div className="md:hidden">
        <Swiper
          scrollbar={{
            hide: true,
            draggable: true,
          }}
          modules={[Scrollbar]}
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={30}
          breakpoints={{
            100: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            430: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            537: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            760: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            850: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            1250: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className=" !w-[240px] !h-[320px] ">
            <MediaCard />
          </SwiperSlide>

          <SwiperSlide className=" !w-[240px] !h-[320px] ">
            <MediaCard />
          </SwiperSlide>
          <SwiperSlide className=" !w-[240px] !h-[320px] ">
            <MediaCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MediaTabSections;
