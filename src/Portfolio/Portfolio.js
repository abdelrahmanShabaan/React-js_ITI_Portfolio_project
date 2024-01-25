import React from "react";
import "./style.css";
import CartBlack from "../Carts/CartBlack";


class Portfolio extends React.Component{

    

   
    render(){
        return(
            <>
    
            
  <div class="portfolio-section">
    <div class="portfolio-box">
      <h2>Project 1</h2>
        <hr></hr>
    </div>

    

    <CartBlack color="grey" name="Hello world"/>

    <div class="portfolio-box">
      <h2>Project 3</h2>
      <hr></hr>
    </div>

    <CartBlack color="grey" name="good noon"/>

    <div class="portfolio-box">
      <h2>Project 5</h2>
      <hr></hr>
    </div>

    <CartBlack color="grey" name="good morning"/>

  </div>


            </>
        )
    }
    
}



export default Portfolio;



