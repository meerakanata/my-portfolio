import React from "react";
import { useNavigate } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
// import Navigation from "./Components/Navigation";
import Testimonials from "./Components/Testimonials";
// import Resume from "./Components/Resume";
// import CaseThumbnails from "./Components/CaseThumbnails";
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


// No, but you could go with something like border-bottom: 1px solid #000 and padding-bottom: 3px.

// If you want the same color of the "underline" (which in my example is a border), you just leave out the color declaration, i.e. border-bottom-width: 1px and border-bottom-style: solid.

// For multiline, you can wrap you multiline texts in a span inside the element. E.g. <a href="#"><span>insert multiline texts here</span></a> then just add border-bottom and padding on the <span> - Demo