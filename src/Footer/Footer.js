import React from "react";
import "./style.css";
import ButtonBlack from "../Buttons/ButtonBlack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";


class Footer extends React.Component{

    
    
    render(){
        return (

            <>
            
            <div class="footer">
        <div class="footer-columns">
            <div class="footer-column">
                <h3>GET IN TOUCH</h3>
                <p><FontAwesomeIcon icon={faEnvelope} /> abdelrahmanshaaban998@gmail.com</p>
                <p><FontAwesomeIcon icon={faMobilePhone} /> (+20) 010 000 111 000</p>
            </div> 
            <div class="footer-column">
            <ButtonBlack name="CONTACT ME" textcolor="white" backgroundcolor="Transparent" size="18px" padding="15px" cursor="pointer" border_radius="4px" border="2px solid white" />
 
            </div>
            <div class="footer-column">
                <h3><FontAwesomeIcon icon={faFacebookF} /> <FontAwesomeIcon icon={faSquareXTwitter} />  </h3>
                <p>copywrite @2024</p>
            </div>
        </div>
    </div>

            
            </>
        )
    }
}




export default Footer;