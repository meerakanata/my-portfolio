import React from "react";
import { useNavigate } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Testimonials from "./Components/Testimonials";
import HomeCarousel from "./Components/HomeCarousel";
import HomeCarouselMobile from "./Components/HomeCarouselMobile";

function Home() {
    let navigate = useNavigate();
  return (
    <div className="home">
        <AboutMe />
        <HomeCarousel />
        <HomeCarouselMobile />
        <Testimonials />
    </div>
  );
}

export default Home;