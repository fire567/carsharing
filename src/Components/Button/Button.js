import React from "react";
import "./Button.css";

const Button = ({text, width, activeBTN}) => {
    return(
        <button className={activeBTN} style={{width: `${width}`}}>
            {text}
        </button>
    )
}

export default Button;
 