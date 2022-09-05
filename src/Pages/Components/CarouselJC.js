import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function CarouselJC() {
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
        className="mySwiper"
      >
        <SwiperSlide> <img className="JC_Slide" src="/my-portfolio/.././Images/JCID/Carousel/Slide1.png" alt="slide 1"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="/my-portfolio/.././Images/JCID/Carousel/Slide2.png" alt="slide 2"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="/my-portfolio/.././Images/JCID/Carousel/Slide3.png" alt="slide 3"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="/my-portfolio/.././Images/JCID/Carousel/Slide4.png" alt="slide 4"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="/my-portfolio/.././Images/JCID/Carousel/Slide5.png" alt="slide 5"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="/my-portfolio/.././Images/JCID/Carousel/Slide6.png" alt="slide 6"/></SwiperSlide>
        <SwiperSlide> <img className="JC_Slide" src="/my-portfolio/.././Images/JCID/Carousel/Slide7.png" alt="slide 7"/></SwiperSlide>
      </Swiper>
    </>
  );
}
