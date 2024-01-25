import React from "react";


class ButtonBlack extends React.Component{

    
  
    constructor(props){
        super()
    }


    render(){
            return(
                <> 
                    <button style={{
                        backgroundColor: this.props.backgroundcolor , 
                        fontSize:this.props.size ,
                        color:this.props.textcolor ,
                        padding:this.props.padding,
                        cursor:this.props.cursor,
                        borderRadius:this.props.border_radius,
                        border:this.props.border
                        }}> {this.props.name}</button>
                </>
            )
    }

}




export default ButtonBlack;