import React from "react";
import "./style.css";


class HeroSection extends React.Component{

    
    render(){
        return(
            <>
      
      <header class="portfolio-header">
        <div class="header-text">
            <div class="header-row">
                <h1>Abdelrahman Shaaban</h1>
                <p>Software Engineer</p>
            </div>
        </div>
        <img className="human-image" src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png" />
    </header>

            </>
        )
    }
    
}



export default HeroSection;