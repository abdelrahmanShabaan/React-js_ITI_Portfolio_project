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
                <ButtonWhite name="Download Resume" textcolor="white" backgroundcolor="#0e0c0c" size="15px" padding="15px" cursor="pointer" border_radius="4px" border="2px solid black"  />
                
            </div>
        </div>
        </section>
        </>
        )
    }
}




export default AboutMe;