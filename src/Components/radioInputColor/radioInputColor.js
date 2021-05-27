import React, { useState } from "react";
import {ReactSVG} from "react-svg";
import radioDefault from "../../assets/radioDefault.svg";
import radioActive from "../../assets/radioActive.svg";
import { connect } from "react-redux";
import {chooseColor} from "../actions/index"

const RadioInputColor = ({ setCar, style, indent, chooseColor, setColor }) => {
    const [ radio, setRadio ] = useState(null);

    const activeRadio = (id, color) => {
        setRadio(id)
        chooseColor(color)
    }

    return (
        <div className="radio-input-form" style={{display: `${style}`}}>
            {
            setCar.colors.map((item, id) => (
                <div className={indent} key={id}>
                    {setColor === item ? 
                        <ReactSVG src={radioActive} className="radio-pic" onClick={() => activeRadio(id, item)} alt="radio"/> :
                        <ReactSVG src={radioDefault} className="radio-pic" onClick={() => activeRadio(id, item)} alt="radio"/>
                    }
                    <li className="radio-value">
                        {item}
                    </li>
                </div>
            )) }
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        setCar: state.setCar,
        setColor: state.setColor
    }
}

export default connect(mapStateToProps, {
    chooseColor: chooseColor
})(RadioInputColor);