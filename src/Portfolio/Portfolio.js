import React from "react";
import "./style.css";
import CartBlack from "../Carts/CartBlack";
import CartWhite from "../Carts/CartWhite";


class Portfolio extends React.Component{

    

   
    render(){
        return(
            <>
    
            
  <div class="portfolio-section">
  
    <CartWhite backgroundColor="white"    padding="50px" fontSize="10px" name="WEB DESIGN"/>
    <CartBlack backgroundColor="#808080"  padding="50px" fontSize="10px" name="MOBILE DESIGN"/>
    <CartWhite backgroundColor="white"    padding="50px" fontSize="10px"  name="LOGO DESIGN"/>
    <CartBlack backgroundColor="#808080"  padding="50px" fontSize="10px"  name="WEB APPLICATION DEVELOPMENT"/>
    <CartWhite backgroundColor="white"    padding="50px" fontSize="10px"  name="MOBILE APP DEVELOPMENT"/>
    <CartBlack backgroundColor="#808080"  padding="50px" fontSize="10px"  name="PWA DEVELOPMENT"/>

  </div>


            </>
        )
    }
    
}



export default Portfolio;



