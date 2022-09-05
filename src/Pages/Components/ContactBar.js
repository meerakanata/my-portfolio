import React from "react";
import LinkedInLogo from "./LinkedInLogo";
import DownloadButton from "./DownloadButton";
import EmailIcon from "./EmailIcon";


function ContactBar() {
    return (
        <div className="contactBar">
            <h4><a href="mailto:meera31kanata@gmail.com" className="contactBar__email">meera31kanata@gmail.com</a></h4>
            <EmailIcon className={"contactBar__emailMobile"}/>
            <a id="LinkedInIcon" href="https://www.linkedin.com/in/meera-uxui/" target="_blank"><LinkedInLogo alt="LinkedIn logo" className="contactBar__child"/></a>
            <a href="/my-portfolio/../../../../Resume/MeeraShah-Resume.pdf" download="MeeraShah-Resume">
                <DownloadButton className="contactBar__dnldButton"/>
            </a>
        </div>
        
    );
}

export default ContactBar;