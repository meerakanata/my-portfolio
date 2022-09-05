import React from "react";
import CarouselJC from "./CarouselJC";
import CarouselJCMobile from "./CarouselJCMobile";


function CaseJC(props) {

    return (
        <div className="caseStudy__detail">
          <div className="caseStudy__detail-name">Jason Clerk Industrial Design</div>
          <div className="caseStudy__detail-splash">
            <div className="imgContainer">
              <img id="jc_splash_desktop" src={".././Images/JCID/splash_jcid.png"} alt="Case Study Splash Image"></img>
              <img id="jc_splash_mobile" src={".././Images/JCID/splash_jcid_mobile.png"} alt="Case Study Splash Image Mobile optimized"></img>
              <div className="imageCaption"></div>
            </div>
            <div className="vitalInfo">
              <ul type="none">
                <li>Client: Jason Clerk</li>
                <li>Timing: 2021</li>
                <li>Duration: 6 Months</li>
                <li>My Role: Designer {"&"} Developer</li>
              </ul>
            </div>
          </div>
          <div className="caseStudy__detail-heading">The Backstory</div>
          <div className="caseStudy__detail-body"><h4>Jason Clerk is a Toronto-based Industrial Designer with a career spanning 20+ years, designing goods across a wide variety of categories. Jason contacted me to inquire about building a website where clients/potential employers could go to see his work online.</h4></div>
          <div className="caseStudy__detail-heading">Problem to Solve {"&"} Core Considerations</div>
          <div className="caseStudy__detail-body">
            <h4><ul type="none">
                <li>- Jason needed a professional website that would quickly communicate his body of work and design process</li>
                <li>- He wanted a clean, simple, sporty design</li>
                <li>- There were limitations with his product photography, being mostly low resolution</li>
            </ul></h4>
          </div>
          <div className="caseStudy__detail-heading">Path to Solution</div>
            <CarouselJC /> 
            <CarouselJCMobile />
          <div className="caseStudy__detail-heading">Outcomes</div>
          <div className="caseStudy__detail-body"><h4>Jason now had an updated version of his <a href="https://jasonclerk.com/" className="jaySiteLink" target="_blank">portfolio</a> online to showcase his work to clients/employers. Within a few days of launching the site, Jason was able to walk a potential client through his work via the site in a phone meeting. Having the site has equipped him to have more meaningful discussions with potential clients advancing the opportunities to secure new business.</h4></div>
          <div className="caseStudy__detail-heading">Next Steps</div>
          <div className="caseStudy__detail-body">
            <h4><ul type="none">
                <li>- Collect, consolidate and incorporate user feedback to improve the usability of the site design</li>
                <li>- Incorporate changes to carousels/pagination/navigation based on feedback collected from a UX Design mentor</li>
                <li>- Work with Jason to add new projects to his website and update his profile photo</li>
            </ul></h4>
          </div>
          <div className="caseStudy__detail-heading">Level Up</div>
          <div className="caseStudy__detail-body">
            <h4>Three key takeaways from the experience:
              <p><span>Time Management</span> - I now have a better sense of how much time is needed to complete various design-related tasks. I also learned what areas to focus on to improve my speed, and what tasks I can accomplish quickly/with ease.</p>
              <p><span>Presenting a Rationale</span> - I learned the value of being able to clearly articulate a rationale for a design decision and how to effectively present that rationale with supporting evidence to ensure stakeholders are confident moving forward.</p>
              <p><span>Trusting My Instincts</span> - At times my intuition would signal that I was not confident in some aspect of my design. I learned to listen to this signal and seek feedback from users, do more research, check with more experienced designers or to keep iterating if I was seeing progress.</p>
            </h4>
          </div>
        </div>
      );
}

export default CaseJC;