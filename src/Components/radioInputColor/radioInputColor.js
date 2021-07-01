import React, { useState } from "react";
import { connect } from "react-redux";
import {chooseColor} from "../actions/index"

const RadioInputColor = ({ setCar, indent, chooseColor, setColor }) => {
    const [ radio, setRadio ] = useState(null);

    const activeRadio = (id, color) => {
        setRadio(id)
        chooseColor(color)
    }

    console.log(setCar)

    return (
        <div className="radio-input-form">
            {setCar.colors.length !== 0 ?
            <div>
                <li className="color-header">Цвет</li>
                <div className="colors-form">
                {setCar.colors.map((item, id) => (
                    <div className={indent} key={id} className={item === setColor ? "radio-input-active" : "radio-input"}>
                        <input type="radio" id={id} className="radio"></input>
                        <label for={id} onClick={() => activeRadio(id, item)}>
                            {item}
                        </label>
                    </div> 
                ))}
                </div>
            </div> 
            : null }
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