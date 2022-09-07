import React from "react";

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function CaseCanada150(props) {

  return (
    <div className="caseStudy__detail">
      <ScrollToTopOnMount />
      <div className="caseStudy__detail-name">Canada 150</div>
      <div className="caseStudy__detail-splash">
        <div className="imgContainer">
          <img id="c150_splash_desktop" src={"./Images/Canada150/splash_canada150.png"} alt="Case Study Splash"></img>
          <img id="c150_splash_mobile" src={"./Images/Canada150/splash_canada150_mobile.png"} alt="Case Study Splash"></img>
          <div className="imageCaption"></div>
        </div>
        <div className="vitalInfo">
          <ul type="none">
              <li>Client: Government of Canada</li>
              <li>Timing: 2017</li>
              <li>Duration: 8 Months</li>
              <li>My Role: Product Owner/Account Director, Spotify</li>
          </ul>
        </div>
      </div>
      <div className="caseStudy__detail-heading">The Backstory</div>
      <div className="caseStudy__detail-body"><h4>The Canada 150 project was a multi-faceted marketing effort that ran in 2017 to celebrate the 150 years that passed since Confederation. The partnership between the Government of Canada (GoC) and Spotify Canada spanned several months including an entire ecosystem (offline and online) to capture the interest of Canadians, and drive excitement leading up to July 1st. </h4></div>
      <div className="caseStudy__detail-heading">Problem to Solve {"&"} Core Considerations</div>
      <div className="caseStudy__detail-body">
        <h4>Initially, the project started strictly as a partnership between the GoC and our Ad Sales team, but I quickly realized that there was potential benefits to expanding the partnership beyond my team. The GoC and Spotify shared the goal of showcasing Canada’s diverse artistic talent, so it made perfect sense to create a co-branded solution to deliver on the shared goal.
          <p>The problem or question at hand became “How do we create an exciting, and completely innovative promotion, that includes an external partner, and successfully balances the nuanced objectives of multiple stakeholders?”</p>
        </h4>
      </div>
      <div className="caseStudy__detail-heading">Final Solution - The Ecosystem</div>
      <div className="caseStudy__detail-body">
        <h4>Simply put, we worked as a team and we leveraged data to inform what we created. The final solution was a Canada 150 Ecosystem consisting of 3 main components:
          <ul type="none"><p>
            <li>- Spotify Brand Campaign (Advertising, PR, Social Media, etc.)</li>
            <li>- Playlist Hub on Spotify (featured custom co-branded content alongside Spotify Editorial content)</li>
            <li>- Musical History Timeline Website (co-branded site)</li>
          </p></ul>
        </h4>
      </div>
      <div className="caseStudy__detail-flow">
        <img id="c150_splash_desktop" src={"./Images/Canada150/flow.jpg"} alt="Case Study User Flow"></img>
        <img id="c150_splash_mobile" src={"./Images/Canada150/flow_mobile.jpg"} alt="Case Study User Flow mobile optimized"></img>
      </div>
      <div className="caseStudy__detail-heading">Path to Solution</div>
      <div className="caseStudy__detail-body">
        <h4>For a promotion of this scale, collaborating cross-functionally became vital to success, objectives {"&"} KPIs across several business units needed to be shared and considered by all involved. 
          <p><span>Ideation {"&"} Concept Development</span> - I conceived of the initial concept, initiated cross-functional communications to establish a team of stakeholders within Spotify and led the group to determine opportunities for custom content. As a team, we expanded the concept to include Canadian Influencers and fleshed out a comprehensive project idea and structure.</p>
          <p><span>Data-Driven Solution</span> - Insights from Spotify and GoC were employed in every aspect of the project to conceive of, organize and execute our solution. Consumer Marketing utilized listener data and past campaign performance to inform the in-market messaging, and media placement. And, Spotify listener data was employed to select the 10 influential Canadians as well as to direct the themes for all co-branded content. Finally, Spotify listener data was utilized to focus the execution towards a younger adult demo on Spotify.</p>
          <p><span>UX {"&"} Product Ownership</span> - My specific role was firstly, to act as a Product Owner overseeing the design {"&"} development of all co-branded aspects of the partnership, and secondly, to own the relationship with our partner (GoC). More specifically, I crafted the user flow through The Ecosystem, provided direction, feedback and approvals on all custom content and design artifacts, and participated in QA/testing of the Musical History Timeline site prior to launch.</p>
        </h4>
      </div>
      <div className="caseStudy__detail-heading">Outcomes</div>
      <div className="caseStudy__detail-body">
        <h4>The project was a first-of-its-kind at Spotify globally, and was strategically significant at a time when Spotify was shifting from growth stage to a streamlined global organization. Several business units moved in lock-step to efficiently meet a varied set of objectives through one comprehensive collaborative effort. The project was shared globally, to 55+ Spotify markets as a best practice for successful collaboration between business units.
          <p>Additionally, in a Canada 150 self-evaluation report released by the GoC, media partnerships were considered to have contributed positively to the objectives of engaging youth and supporting diversity and inclusion.</p>
        </h4>
      </div>
      <div className="caseStudy__detail-heading">Level Up</div>
      <div className="caseStudy__detail-body">
        <h4>This project cemented several skills transferable to UX/UI Design:
          <p><span>Data-Driven Mindset</span> - A high-stakes project from the get-go, I was reminded of the importance of having sound data/insights to rely upon when making decisions. As a result, I now try to approach my work with a data-driven mindset to minimize/eliminate guesswork or assumptions.</p>
          <p><span>Cross-Functional Collaboration</span> - This project truly gave me the freedom to learn how to work collaboratively with other teams at Spotify over several months. I learned the importance of understanding everyone’s goals and how to effectively prioritize within a larger group to ensure progress on the project as a whole.</p>
          <p><span>Innovation</span> - This project challenged me to go beyond the standardized solutions we might typically offer up to partners. While those other solutions worked well 95% of the time, and drove efficiencies in our work flow, this project allowed us to flex our innovation skills, leveraging Spotify{"'"}s varied offerings to deliver a completely original partnership.</p>
        </h4>
      </div>
      <div className="caseStudy__detail-heading">Specialized Team {"&"} Key Stakeholders</div>
      <div className="caseStudy__detail-body">
        <h4>A team of specialists from various business units within Spotify collaborated to flesh out and execute the project in its entirety. The team was made up by:
          <ul type="none"><p>
              <li>Meera Shah - Ad Sales - Spotify</li>
              <li>Ingrid Rosaeg - Ad Sales - Spotify</li>
              <li>Liza Haddad - Creative Solutions - Spotify</li>
              <li>Claudia Seti - Consumer Marketing - Spotify</li>
              <li>Jacqueline O{"’"}Brien - Consumer Marketing - Spotify</li>
              <li>Nathan Wiszniak - Label {"&"} Artist Relations - Spotify</li>
              <li>Gregg Henderson - Editorial - Spotify</li>
          </p></ul>
          <p>Additionally, the folllowing stakeholders contributed extensively to the co-branded aspects of the partnership:</p>
          <ul type="none">
              <li>Government of Canada (GoC) - Advertising Partner/Client</li>
              <li>Red Apple Creative - Design and development of the Musical History Timeline Website</li>
              <li>Cossette Media - GoC Media AOR</li>
              <li>The Tank Media - GoC Creative AOR</li>
          </ul>
        </h4>
      </div>
    </div>
  );
}

export default CaseCanada150;