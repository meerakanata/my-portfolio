import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import ViewCaseButton from "./ViewCaseButton";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function HomeCarousel() {
    let navigate = useNavigate();
  return (
    <div className="carouselContainer">
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
        <SwiperSlide> <img className="Home_Slide" src=".././Images/HomeCarousel/Slide1.png" alt="slide 1" /><div onClick={()=>{navigate("/work/JasonClerkID"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><ViewCaseButton className={"viewCaseButton"}/></div></SwiperSlide>
        <SwiperSlide> <img className="Home_Slide" src=".././Images/HomeCarousel/Slide2.png" alt="slide 2" /><div onClick={()=>{navigate("/work/SugarFlower"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><ViewCaseButton className={"viewCaseButton"}/></div></SwiperSlide>
        <SwiperSlide> <img className="Home_Slide" src=".././Images/HomeCarousel/Slide3.png" alt="slide 3" /><div onClick={()=>{navigate("/work/Canada150"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><ViewCaseButton className={"viewCaseButton"}/></div></SwiperSlide>
        <SwiperSlide> <img className="Home_Slide" src=".././Images/HomeCarousel/Slide4.png" alt="slide 4" /><div onClick={()=>{navigate("/work/McDonaldsGCTA"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><ViewCaseButton className={"viewCaseButton"}/></div></SwiperSlide>

      </Swiper>
    </>
    </div>
  );
}


