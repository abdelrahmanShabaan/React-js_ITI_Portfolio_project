import React from "react";
import "./style.css";
import ButtonBlack from "../Buttons/ButtonBlack";


class HeroSection extends React.Component{

    
    render(){
        return(
            <>
      
      <header class="portfolio-header">
        <div class="header-text">
            <div class="header-row">
                <h1 class="header_names">Abdelrahman Shaaban</h1>
                <p class="description_field">Web Developer & Designer</p>
                <ButtonBlack name="Contact me" textcolor="white" backgroundcolor="#252926" size="18px" />
            </div>
        </div>
        <img className="human-image" src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png" />
    </header>

            </>
        )
    }
    
}




export default HeroSection;