import React,{useState} from 'react';



function CaseMcDs(props) {

  return (
    <div className="caseStudy__detail">
      <div className="caseStudy__detail-name">Roadtrip Playlist Builder</div>
      <div className="caseStudy__detail-splash">
        <div className="imgContainer">
          <img id="mcds_splash_desktop" src={"/my-portfolio/.././Images/McDs/splash_mcds.png"} alt="Case Study Splash Image"></img>
          <img id="mcds_splash_mobile" src={"/my-portfolio/.././Images/McDs/splash_mcds_mobile.png"} alt="Case Study Splash Image mobile optimized"></img>
          <div className="imageCaption">Image Source: McDonald's Canada</div>
        </div>
        <div className="vitalInfo">
          <ul type="none">
              <li>Client: McDonald's Canada</li>
              <li>Timing: 2016</li>
              <li>Duration: 3 Months</li>
              <li>My Role: Product Owner/Account Director, Spotify</li>
          </ul>
        </div>
      </div>
        
      <div className="caseStudy__detail-heading">The Backstory</div>
      <div className="caseStudy__detail-body"><h4>Following its success the previous year, in 2016, McDonald{"’"}s Canada brought back their Great Canadian Taste Adventure promotion. The promotion touted a Canadiana-inspired menu, crafted to celebrate the different regions of Canada with meals inspired by regional taste preferences. As part of the promotion, McDonald{"’"}s sought to partner with Spotify to showcase the diversity of the menu items and highlight the regional connection in an engaging way.</h4></div>
      <div className="caseStudy__detail-heading">Problem to Solve {"&"} Core Considerations</div>
      <div className="caseStudy__detail-body"><h4>I needed to come up with a unique and authentic-feeling way to promote the menu option to Canadians on Spotify. The solution needed to tap into the passion points of Canadians in order to deliver on the key insight of pride and local ties. The solution also needed to provide value in order to ensure Canadians would actually engage with the promotion.</h4></div>
        
      <div className="caseStudy__detail-heading">Final Solution - Roadtrip Playlist Builder Website</div>
      <div className="caseStudy__detail-body"><h4>Actual imagery of design artifacts and the final website that was “live” during the promotion are no longer available. This diagram offers a high-level view on the core functionality of the final solution, a Roadtrip Playlist Builder website.</h4></div>
      <img id="flowDiagram" src={"/my-portfolio/.././Images/McDs/site_flow.svg"} alt="roadtrip playlist website user flow diagram"></img>
      <img id="flowDiagram_mobile" src={"/my-portfolio/.././Images/McDs/site_flow_mobile.svg"} alt="roadtrip playlist website user flow diagram"></img>
      <div className="caseStudy__detail-heading">Path to Solution</div>
      <div className="caseStudy__detail-body">
        <h4><span>Ideation</span> - To kick-off, I led a brainstorm session with McDonald{"’"}s media agency, OMD, where 3 key insights re-surfaced and provided the foundation for concept development:
          <ul type="none"><p>
            <li>- Canadians have a strong sense of pride and deep connection to local themes</li>
            <li>- Spotify users are highly engaged and spend hours streaming audio while in the car/driving daily</li>
            <li>- Spotify users had an interest in Road Trips and propensity towards adventure-seeking</li>
          </p></ul>
          <p><span>Concept Development</span> - A general concept formed from the brainstorm to introduce the McDonald{"’"}s regionally-inspired menu to Spotify listeners around the passion point of summer Road Tripping, specifically a website where users could get a custom-created playlist for a road trip. We refined the concept to incorporate map functionality that would give users a suggested driving route.</p>
          <p><span>UX {"&"} Product Ownership</span></p>
          <ul type="none">
            <li>- Crafted a high-level user flow and briefed design/dev team (Red Apple Creative)</li>
            <li>- Consulted design/dev team on technical feasibility of user flow</li>
            <li>- Refined concept to provide a more enriching user experience by:</li>
            <ul type="none"><p>
              <li>- Having the duration of the generated playlist match the duration of the travel route</li>
              <li>- Incorporating a curated set of “hidden gem” landmarks along the generated route</li>
              <li>- Adding in McDonald{"’"}s locations along the route, and identifying where special menu items could be found</li>
            </p></ul>
            <p>
              <li>- Confirmed viability of fleshed out concept (based on budget from brief)</li>
              <li>- Oversaw the design/dev of the site by the team at Red Apple Creative, reviewing {"&"} approving design artifacts and performing site QA prior to lauch</li>
            </p>
          </ul>
          <p><span>Measurement</span> - As a final step prior to launching the site, I established KPIs with OMD and ensured measurement was in place to track performance</p>
        </h4>
      </div>
      <div className="caseStudy__detail-heading">Outcomes</div>
      <div className="caseStudy__detail-body">
        <h4>At the end of the promotion, I led a comprehensive review of key results with OMD, where the project was deemed a success, outperforming expecations on user engagement with playlist creations and time spent.
          <p>Additionally, the site was nominated for a 2016 Media Innovation Award in the category of “Best in Consumer Engagement”.</p>
        </h4>
      </div>
      <div className="caseStudy__detail-heading">Level Up</div>
      <div className="caseStudy__detail-body">
        <h4>Wearing the hat of a Product Owner on this project, I had the opportunity to further develop a few key skills relevant to UX/UI Design, particularly:
          <p><span>User Flows</span> - I gained a greater understanding on how to adapt a user flow when unforeseen changes arise. In this case, we had to consider different flows depending on if a user was logged in or not, if they were permitting use of their personal data, and also for feeding the Google Maps API data into the experience. It taught me to be flexible and resourceful - to consult experts when needed to ensure the user flow accurately reflects the solution to be built and that it is technically feasible.</p>
          <p><span>Ideation</span> - Ideating with our client in a brainstorm was a welcome challenge on this project. I was able to practice creative thinking tactics to generate multiple different ideas quickly, turning ideas into plausible concepts on the fly,  and then effectively communicating them to our clients in order to arrive at a viable concept to pursue following the meeting.</p>
          <p><span>Innovation</span> - Being tasked to come up with a truly innovative idea, I realized that leveraging the key insights in order to create a fun and useful product would allow us to connect in a deep way with customers while giving them something they’ve never seen before. As a result, leveraging relevant insights/data will be my first step in future projects where innovation is a priority.</p>
        </h4>
      </div>
      <div className="caseStudy__detail-heading">Key Stakeholders</div>
      <div className="caseStudy__detail-body"><h4>
        <ul type="none">
          <li>Meera Shah - Ad Sales - Spotify</li>
          <li>OMD Canada - McDonald{"’"}s Canada Media AOR</li>
          <li>Cossette Media - McDonald{"’"}s Canada Creative AOR</li>
          <li>Tribal DDB - McDonald{"’"}s Canada Digital Assets Creators</li>
          <li>Red Apple Creative - Design and development of the Roadtrip Playlist Website</li>
          <li>McDonald{"’"}s Canada</li>
        </ul></h4>
      </div>
    </div>
  );
}

export default CaseMcDs;
