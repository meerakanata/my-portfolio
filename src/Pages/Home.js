import React from "react";
import AboutMe from "./Components/AboutMe";
import Testimonials from "./Components/Testimonials";
import HomeCarousel from "./Components/HomeCarousel";
import HomeCarouselMobile from "./Components/HomeCarouselMobile";

function Home() {
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