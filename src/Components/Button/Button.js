import React from "react";
import "./Button.css";

const Button = ({text, width, activeBTN, disabled}) => {
    return(
        <button className={activeBTN} style={{width: `${width}`}} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;
 