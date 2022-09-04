import React from "react";
import { useNavigate } from "react-router-dom";

function Testimonials() {
    let navigate = useNavigate();
    return (
        <div className="testimonials">
                <div className="testimonials__column">
                    <h4>Look no further! I wanted to showcase my work in a way that really reflected my own personal aesthetic and design philosophy. Meera created a site that really felt like me. Her guidance, and attention to detail throughout the process was fantastic.</h4>
                    <div className="testimonials__column-source">
                        <p>Jason Clerk, Senior Industrial Designer,</p>
                        <p>Generator Design Solutions Inc.</p> 
                    </div>
                </div>
                 <div className="testimonials__column">
                    <h4>Meera played an integral role at crafting data driven solutions that seamlessly integrated our partner, The Government of Canada. From concept development to briefing of our global cross functional teams she was instrumental in balancing both partner {'&'} campaign priorities.</h4>
                    <div className="testimonials__column-source">
                        <p>Jacqueline O'Brien, formerly Manager,</p>
                        <p>Marketing {'&'} Brand Experience, Spotify Canada</p>
                    </div>
                </div>
                <div className="testimonials__column">
                    <h4>Having known and worked with Meera for over 10 years, I can say she is creative, collaborative and strategic. I{"’"}ve worked with Meera across several sales roles where she took data to insights and ideas. She would deliver unique and bespoke solutions, always keeping in mind my goals and KPIs. Anytime our projects faced challenges, she was transparent and solutions oriented, cementing her as a trusted colleague. 
Meera is a joy to work with and I always look forward to any opportunity to partner with her!</h4>
                    <div className="testimonials__column-source">
                        <p>Gah-Yee Won, Senior Marketing Executive</p>
                    </div>
                </div>
                <div className="testimonials__column">
                    <h4>In my time working with Meera, she went above and beyond the expectations on delivering against the requirements of the brief. The results of the execution spoke for itself, delivering above forecasts' playlist creations and listens, with an above benchmark time spent on site to boot, and a great success for the client. I would have absolutely zero hesitation in working with Meera again, or recommending her to any of my peers.</h4>
                    <div className="testimonials__column-source">
                        <p>Rob Nolan, formerly Digital Supervisor</p>
                        <p>on McDonald's, OMD Canada</p></div>
                </div>
           </div>

    );
}

export default Testimonials;