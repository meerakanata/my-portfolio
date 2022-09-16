import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

export default function CarouselSF() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img className="SF_Slide" src="./Images/SugarFlower/Carousel/Slide1.png" alt="slide 1"/></SwiperSlide>
        <SwiperSlide> <img className="SF_Slide" src="./Images/SugarFlower/Carousel/Slide2.png" alt="slide 2"/></SwiperSlide>
        <SwiperSlide> <img className="SF_Slide" src="./Images/SugarFlower/Carousel/Slide3.png" alt="slide 3"/></SwiperSlide>
        <SwiperSlide> <img className="SF_Slide" src="./Images/SugarFlower/Carousel/Slide4.png" alt="slide 4"/></SwiperSlide>
      </Swiper>
    </>
  );
}
