import React, { useState} from "react";
import {ReactSVG} from "react-svg";
import checkboxDufault from "../../assets/checkboxDefault.svg";
import checkboxActive from "../../assets/checkboxActive.svg";
import "./CheckboxInput.css";

const CheckboxInput = ({ option }) => {
    const [ checkbox, setCheckbox ] = useState(0);

    const activeCheckbox = (id) => {
        setCheckbox(id)
    }

    return (
        <div className="extra-input-form">
            {option.map((option) => (
                <div className="checkbox-form" key={option.id}>
                    <ReactSVG src={checkbox === option.id ? checkboxActive : checkboxDufault} className="checkbox-pic" alt="checkbox" onClick={() => activeCheckbox(option.id)}/>
                    <div className="checkbox-value">
                        {option.value}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CheckboxInput;