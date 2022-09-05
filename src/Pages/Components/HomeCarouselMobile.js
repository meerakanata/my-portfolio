import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import ViewButtonMobile from "./ViewButtonMobile";

export default function HomeCarouselMobile() {
    let navigate = useNavigate();
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
        <SwiperSlide> <img className="Home_Slide" src=".././Images/HomeCarousel/Slide1_mobile.png" alt="slide 1" /><div onClick={()=>{navigate("/work/JasonClerkID"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><ViewButtonMobile className={"viewCaseButton"}/></div></SwiperSlide>
        <SwiperSlide> <img className="Home_Slide" src=".././Images/HomeCarousel/Slide2_mobile.png" alt="slide 2" /><div onClick={()=>{navigate("/work/SugarFlower"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><ViewButtonMobile className={"viewCaseButton"}/></div></SwiperSlide>
        <SwiperSlide> <img className="Home_Slide" src=".././Images/HomeCarousel/Slide3_mobile.png" alt="slide 3" /><div onClick={()=>{navigate("/work/Canada150"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><ViewButtonMobile className={"viewCaseButton"}/></div></SwiperSlide>
        <SwiperSlide> <img className="Home_Slide" src=".././Images/HomeCarousel/Slide4_mobile.png" alt="slide 4" /><div onClick={()=>{navigate("/work/McDonaldsGCTA"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><ViewButtonMobile className={"viewCaseButton"}/></div></SwiperSlide>

      </Swiper>
    </>
  );
}