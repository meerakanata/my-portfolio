import React from "react";


function AboutMe() {

  return (
    <div className="about">
        <div className="about__columnA">
            <div className="about__columnA-Title">Hi, I{"’"}m Meera, an expert at crafting digital experiences.</div>
            <img id="headshot" src="./Images/profilepic.png" alt="Meera Shah headshot"/>
        </div>
        <div className="about__columnB">
            <img id="headshot2" src="./Images/profilepic.png" alt="Meera Shah headshot"/>
            <div className="about__columnB-Title">Hi, I{"’"}m Meera, an expert at crafting digital experiences.</div>
            <h4><p>Most recently, as part of the sales organization at Spotify, and previously at Google, 
            I worked with the world's top brands to conceptualize, oversee {'&'} launch a variety of web products.</p><p>Drawing from my collective 13 yrs. working in advertising, I now bring both unique and varied experience to my design practice.</p></h4>
        </div>
    </div>
  );
}

export default AboutMe;