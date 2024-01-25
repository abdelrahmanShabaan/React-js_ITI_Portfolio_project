import React from "react";
import "./style.css";


class Skills extends React.Component{

    
    render(){
        return(
            <>

<section class="skill-me-section">
        <div class="left-columns">
            <h1>Focuss on</h1>
            <p>Software engineering</p>
            <p>Software engineering</p>
            <p>Software engineering</p>
            <p>Software engineering</p>
        </div>
        <div class="right-columns">            
                <p>HTML</p>
                <div class="container">
                <div class="skills html">90%</div>
                </div>

                <p>CSS</p>
                <div class="container">
                <div class="skills css">80%</div>
                </div>

                <p>JavaScript</p>
                <div class="container">
                <div class="skills js">65%</div>
                </div>

                <p>PHP</p>
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