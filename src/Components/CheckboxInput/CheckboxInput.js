import React, { useState, Suspense} from "react";
import {ReactSVG} from "react-svg";
import checkboxDufault from "../../assets/checkboxDefault.svg";
import checkboxActive from "../../assets/checkboxActive.svg";
import { connect } from "react-redux";
import { chooseExtra } from "../actions/index";
import "./CheckboxInput.css";

const CheckboxInput = ({ chooseExtra, setOption }) => {
    const extraOptions = [
        {id: 0, value: "Полный бак, 500р", category: "Полный бак"},
        {id: 1, value: "Детское кресло, 200р", category: "Детское кресло"},
        {id: 2, value: "Правый руль, 1600р", category: "Правый руль"},
    ]

    const activeCheckbox = (value) => {
        chooseExtra(value)
    }

    

    return (
        <div className="extra-input-form">
            {extraOptions ?
            extraOptions.map((option) => (
                <div className="checkbox-form" key={option.id}>
                        <ReactSVG src={setOption === option.category ? checkboxActive : checkboxDufault} className="checkbox-pic" alt="checkbox" onClick={() => activeCheckbox(option.category)}/>
                    <div className="checkbox-value">
                        {option.value}
                    </div>
                </div>
            )): null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        setOption: state.setOption
    }
}

export default connect(mapStateToProps, {
    chooseExtra: chooseExtra
})(CheckboxInput);