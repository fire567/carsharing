import React, { useState } from "react";
import {ReactSVG} from "react-svg";
import radioDefault from "../../assets/radioDefault.svg";
import radioActive from "../../assets/radioActive.svg";
import { connect } from "react-redux";
import {chooseColor} from "../actions/index"

const RadioInputColor = ({ setCar, indent, chooseColor, setColor }) => {
    const [ radio, setRadio ] = useState(null);

    const activeRadio = (id, color) => {
        setRadio(id)
        chooseColor(color)
    }

    //<ReactSVG src={setColor === item ? radioActive : radioDefault} className="radio-pic" onClick={() => activeRadio(id, item)} alt="radio"/>

    return (
        <div className="radio-input-form">
            {setCar.colors !== undefined ?
            setCar.colors.map((item, id) => (
                <div className={indent} key={id} className={item === setColor ? "radio-input-active" : "radio-input"}>
                    <input type="radio" id={id} className="radio"></input>
                    <label for={id} onClick={() => activeRadio(id, item)}>
                        {item}
                    </label>
                </div>
            )) : null }
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