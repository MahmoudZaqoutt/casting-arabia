import React from "react";
import WhoAreYou from "../WhoAreYou";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import video from "../../../assets/بدون_عنوان_28_1080p_1.mp4";
const WhoAreYouSection = () => {
  return (
    <div>
      <div className="hidden md:block">
        <WhoAreYou
          title="Are you a Talent?"
          subTitle="Do you love to act, sing, dance, model, write, or other jobs in entertainment? If so, you’ve come to the right place. Watch this video and sign up to apply for opportunities."
          src={
            "https://casting-arabia-uploads.s3.us-east-2.amazonaws.com/videos/talent.mp4"
          }
          link="Join as TALENT"
          href="/auth/register"
          className="mt-5"
        />
        <WhoAreYou
          title="Are you hiring for a project?"
          subTitle="Are you looking for talented actors, singers, dancers, writers, and camera crew for your next project? Casting Arabia can help you. Watch this video and click below to register and post your next opportunity."
          src="https://casting-arabia-uploads.s3.us-east-2.amazonaws.com/videos/seeker.mp4"
          className="md:!flex-row-reverse md:mt-5"
          link="Join as SEEKER"
          href="/auth/register"
        />
      </div>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper md:!hidden block"
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        slidesPerGroup={1}
      >
        <SwiperSlide>
          <WhoAreYou
            title="Are you a Talent?"
            subTitle="Do you love to act, sing, dance, model, write, or other jobs in entertainment? If so, you’ve come to the right place. Watch this video and sign up to apply for opportunities."
            src=""
            link="Join as TALENT"
            href="TalentRegister"
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhoAreYou
            title="Are you hiring for a project?"
            subTitle="Are you looking for talented actors, singers, dancers, writers, and camera crew for your next project? Casting Arabia can help you. Watch this video and click below to register and post your next opportunity."
            src=""
            className="md:!flex-row-reverse md:mt-5"
            link="Join as SEEKER"
            href="SeekerRegister"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WhoAreYouSection;
