import React from "react";
import "./Button.css";

const Button = ({text, width, activeBTN, disabled}) => {
    return(
        <button 
            className="order-btn" 
            style={disabled === "disabled" ? {width: `${width}`, background: "#EEEEEE"} : {width: `${width}`}} 
            disabled={disabled} 
        >
            {text}
        </button>
    )
}

export default Button;
 