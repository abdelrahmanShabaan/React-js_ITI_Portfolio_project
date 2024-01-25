import React from "react";
import "./style.css";
import ButtonWhite from "../Buttons/ButtonWhite";


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
                <br></br>and have experience for 5 years as software engineer with build and maintance websites
                <br></br>and smart applications.
            </p>
            <div class="button-container">
                <ButtonWhite name="Download Resume" textcolor="black" backgroundcolor="#e0ddd5" size="16px" padding="10px" cursor="pointer" border_radius="4px" />
            </div>
        </div>
        </section>
        </>
        )
    }
}




export default AboutMe;