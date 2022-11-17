import React from "react";
import CarouselSF from "./CarouselSF";
import CarouselSFMobile from "./CarouselSFMobile";

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function CaseSF(props) {

  return (
    <div className="caseStudy__detail">
      <ScrollToTopOnMount />
        <div className="caseStudy__detail-name">Sugar {"&"} Flower</div>
        <div className="caseStudy__detail-splash">
          <div className="imgContainer">
            <img id="sf_splash_desktop" src={"./Images/SugarFlower/splash_sf.png"} alt="Case Study Splash"></img>
            <img id="sf_splash_mobile" src={"./Images/SugarFlower/splash_sf_mobile.png"} alt="Case Study Splash mobile optimized"></img>
            <div className="imageCaption">Cake photograpy provided by{'\u00A0'}<a href="https://livforcake.com" className="livSiteLink" target="_blank" rel="noreferrer" >@livforcake</a></div>
          </div>
          <div className="vitalInfo">
            <ul type="none">
                <li>Client: Spec Work</li>
                <li>Timing: 2022</li>
                <li>My Role: UX/UI Designer</li>
            </ul>
          </div>
        </div>
        <div className="caseStudy__detail-heading">The Backstory</div>
        <div className="caseStudy__detail-body"><h4>“Sugar {"& "}Flower” was a self-directed spec project for a mock business. The inspiration for this project came when I was placing an order for a custom cake for my sister{"’"}s birthday and found that the ordering experience could be improved.</h4></div>
        <div className="caseStudy__detail-heading">Problem to Solve {"&"} Core Considerations</div>
        <div className="caseStudy__detail-body">
          <h4><i>Mock Brief: Sugar {"&"} Flower, a locally-owned cake shop wanted to increase sales of their custom cakes. They felt that the process for placing an order could be simplified/automated via their existing website. A key insight they shared was that they were gaining a following rapidly on Instagram because of the “curb appeal” of their cakes.</i>
            <p>The problem of “How to improve the process for ordering a custom cake?” was clear, and to start answering that question, I began with noting the following core considerations:</p>
              <ul type="none"><p>
                <li>- Improving the process of ordering a custom cake carried different meaning depending on the user (customer vs. shop employee vs shop owner)</li>
                <li>- They already had a functional website with a shopping cart that could be leveraged towards a solution</li>
                <li>- There was an opportunity to capitalize on the visual appeal of their cakes to enhance the ordering experience</li>
              </p></ul>
          </h4>
        </div>
        <div className="caseStudy__detail-heading">Path to Solution</div>
          <CarouselSF />
          <CarouselSFMobile />
        <div className="descriptionBox">
          <div className="caseStudy__detail-heading">Final Design</div>
            <div className="caseStudy__detail-body">
              <h4><ul type="none">
                <li>- I created an aesthetic inspired by brands like Ladurée, and Fortnum {"&"} Mason, which informed aspects of the visual design like type, colour palette, arch motif, etc.</li>
                <li>- Established type styles, colour palette, buttons styles, states, and sourced UI elements to arrive at final design</li>
              </ul></h4>
            </div>
        </div>
        <video controls muted height={500}>
          <source src="./video/NEWSugarFlower_prototype.mp4#t=0.1"/>
        </video>
        <div className="caseStudy__detail-heading">Outcomes</div>
        <div className="caseStudy__detail-body"><h4>The first phase of the project provided the opportunity to create a preliminary design solution. Prior to implementation, a working prototype can now be built off this initial design in order to begin user testing.</h4></div>
        <div className="caseStudy__detail-heading">Next Steps</div>
        <div className="caseStudy__detail-body">
          <h4>Had the project been for a real client, I would continue with the following next steps:
            <ul type="none"><p>
              <li>- Build a full prototype of the feature including all flows.</li>
              <li>- Perform user testing to determine any pain points in the experience that could be improved upon</li>
              <li>- Organize results from user testing, identifying design opportunities, prioritize {"&"} group tasks and set a timeline for second phase of design</li>
            </p></ul>
          </h4>
        </div>
        <div className="caseStudy__detail-heading">Level Up</div>
        <div className="caseStudy__detail-body">
          <h4>By focusing on a single feature design, I was able to further develop the following practical skills:
            <p><span>Sketch {"&"} Figma</span>  -  I gained knowledge and experience with both Sketch {"&"} Figma working on this project and an understanding of the advantages to using each respectively.</p>
            <p><span>UI Best Practices</span> - While designing the experience of the stepper, I spent time researching UI Best Practices in great detail. In performing this research, I gained invaluable knowledge on the intricacies of UI and Material Design.</p>
            <p><span>User Personas</span> - This project provided a perfect opportunity to build upon my experience in crafting User Personas. I got the chance to consider the experience for 2 distinct user groups, delineate the requirement of each group and formulate a hypothesis to solve for a varied list of user needs.</p>
          </h4>
        </div>   
    </div>
  );
}

export default CaseSF;