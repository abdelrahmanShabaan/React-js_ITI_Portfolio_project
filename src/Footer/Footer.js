import React from "react";
import "./style.css";
import ButtonBlack from "../Buttons/ButtonBlack";

class Footer extends React.Component{

    
    
    render(){
        return (

            <>
            
            <div class="footer">
        <div class="footer-columns">
            <div class="footer-column">
                <h3>GET IN TOUCH</h3>
                <p>Abdelrahmanshaaban998@gmail.com</p>
                <p>(+20) 010 000 111 000</p>
            </div> 
            <div class="footer-column">
            <ButtonBlack name="CONTACT ME" textcolor="white" backgroundcolor="Transparent" size="18px" padding="15px" cursor="pointer" border_radius="4px" border="2px solid white" />

            </div>
            <div class="footer-column">
                <h3>Column 3</h3>
                <p>Content for Column 3.</p>
            </div>
        </div>
    </div>

            
            
            </>
        )
    }
}




export default Footer;