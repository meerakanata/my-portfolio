import React from "react";
import AboutMe from "./Components/AboutMe";
import Testimonials from "./Components/Testimonials";
import HomeCarousel from "./Components/HomeCarousel";
import HomeCarouselMobile from "./Components/HomeCarouselMobile";

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function Home() {
  return (
    <div className="home">
        <ScrollToTopOnMount />
        <AboutMe />
        <HomeCarousel />
        <HomeCarouselMobile />
        <div className="leadin"><p>What clients and colleagues are saying...</p></div>
        <Testimonials />
    </div>
  );
}

export default Home;