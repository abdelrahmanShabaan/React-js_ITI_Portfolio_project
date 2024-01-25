import React from "react";
import "./style.css";


class Skills extends React.Component{

    
    render(){
        return(
            <>

<section class="skill-me-section">
        <div class="left-columns">
            <h1 class="paragraph_style">Focuss on</h1>
            <p class="paragraph_style">UI/UX Design</p>
            <p class="paragraph_style">Response Design</p>
            <p class="paragraph_style">Web Design</p>
            <p class="paragraph_style">Mobile App Design</p>
        </div>
        <div class="right-columns">            
                <p class="paragraph_style">HTML</p>
                <div class="container">
                <div class="skills html">90%</div>
                </div>

                <p class="paragraph_style">CSS</p>
                <div class="container">
                <div class="skills css">80%</div>
                </div>

                <p class="paragraph_style">JavaScript</p>
                <div class="container">
                <div class="skills js">65%</div>
                </div>

                <p class="paragraph_style">PHP</p>
                <div class="container">
                <div class="skills php">60%</div>
                </div>
        </div>
        </section>

            </>
        )
    }
    
}




export default Skills;