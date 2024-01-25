import React from "react";
import "./style.css";


class AboutMe extends React.Component{

    

    
    render(){
        return(
        <>
        <section class="about-me-section">
        <div class="left-column">
            <h1 class="header_h">About Me</h1>
        </div>
        <div class="right-column">
            <p>Software engineer graduate from College of Business Information System with grade Very good 
                and have experience for 5 years as software engineer with build and maintance websites
                and smart applications.
            </p>
            <div class="button-container">
                <button class="download-button">Download Resume</button>
            </div>
        </div>
        </section>
        </>
        )
    }
}




export default AboutMe;