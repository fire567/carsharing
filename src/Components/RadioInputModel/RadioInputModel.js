import React, { useState, useEffect} from "react";
import {ReactSVG} from "react-svg";
import radioDefault from "../../assets/radioDefault.svg";
import radioActive from "../../assets/radioActive.svg";
import { connect } from "react-redux";
import { changeCategory } from "../actions/index";
import "./RadioInputModel.css";

const RadioInputModel = ({ changeCategory, radioInputs, style, indent }) => {
    const [ radio, setRadio ] = useState(0);

    const activeRadio = (id, category) => {
        setRadio(id)
        changeCategory(category)
    }

    return (
        <div className="radio-input-form" style={{display: `${style}`}}>
            {radioInputs ?
            radioInputs.map((item) => (
                <div className={indent} key={item.id}>
                    {radio === item.id ? 
                        <ReactSVG src={radioActive} className="radio-pic" onClick={() => activeRadio(item.id, item.category)} alt="radio"/> :
                        <ReactSVG src={radioDefault} className="radio-pic" onClick={() => activeRadio(item.id, item.category)} alt="radio"/>
                    }
                    <li className="radio-value">
                        {item.value}
                    </li>
                </div>
            )) : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        setCar: state.setCar
    }
}

export default connect(mapStateToProps, {
    changeCategory:changeCategory,
})(RadioInputModel);