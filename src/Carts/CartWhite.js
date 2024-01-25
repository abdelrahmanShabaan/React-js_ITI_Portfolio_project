import React from "react";


class CartWhite extends React.Component{


    
    constructor(props){
        super()
    }


    
    render(){
        return (

        <> 
          <div class="portfolio-box" style={{
            backgroundColor: this.props.backgroundColor,
            fontSize:this.props.fontSize,
            padding:this.props.padding

            }}>
            <h2>{this.props.name}</h2>
            <hr></hr>
        </div>

        </>

    ) 

    }
}

export default CartWhite;