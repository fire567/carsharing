import React from "react";
import "./Button.css";

const Button = ({text, width, disabled, background}) => {
    return(
        <button 
            className="order-btn" 
            style={disabled === "disabled" ? {width: `${width}`, background: "#EEEEEE"} : {width: `${width}`, background: background}} 
            disabled={disabled} 
        >
            {text}
        </button>
    )
}

export default Button;
 