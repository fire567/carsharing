import React from "react";
import "./Button.css";

const Button = ({text, width}) => {
    return(
        <button className="order-btn" style={{width: `${width}`}}>
            {text}
        </button>
    )
}

export default Button;
 