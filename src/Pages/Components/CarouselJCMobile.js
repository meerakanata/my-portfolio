import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function CarouselJCMobile() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperMobile"
      >
        <SwiperSlide> <img className="JC_Slide" src="./Images/JCID/Carousel/Slide1_mobile.png" alt="slide 1"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="./Images/JCID/Carousel/Slide2_mobile.png" alt="slide 2"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="./Images/JCID/Carousel/Slide3_mobile.png" alt="slide 3"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="./Images/JCID/Carousel/Slide4_mobile.png" alt="slide 4"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="./Images/JCID/Carousel/Slide5_mobile.png" alt="slide 5"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="./Images/JCID/Carousel/Slide6_mobile.png" alt="slide 6"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="./Images/JCID/Carousel/Slide7_mobile.png" alt="slide 7"/></SwiperSlide>
      </Swiper>
    </>
  );
}