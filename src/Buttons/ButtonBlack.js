import React from "react";


class ButtonBlack extends React.Component{

    
  
    constructor(props){
        super()
    }


    render(){

            return(
                <> 
                    <button style={{backgroundColor: this.props.color , fontSize:this.props.size , color:this.props.textcolor}}> {this.props.name}</button>
                </>
            )
    }

}




export default ButtonBlack;