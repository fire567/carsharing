import React, { useEffect, setState } from "react";
import {ReactSVG} from "react-svg";
import checkboxDufault from "../../assets/checkboxDefault.svg";
import checkboxActive from "../../assets/checkboxActive.svg";
import { connect } from "react-redux";
import { chooseExtra, setGasolinePrice, setChildChairPrice, setExtraOptPrice } from "../actions/index";
import "./CheckboxInput.css";

const CheckboxInput = ({ chooseExtra, setOption, gasolinePrice, setGasolinePrice, setChildChairPrice, chair, extraOptPrice, setExtraOptPrice }) => {
    const extraOptions = [
        {id: 0, value: "Полный бак, 500р", category: "Полный бак"},
        {id: 1, value: "Детское кресло, 200р", category: "Детское кресло"},
        {id: 2, value: "Правый руль, 1600р", category: "Правый руль"},
    ]

    
    
    

    useEffect(() => {
        if(setOption === "Полный бак"){
            setGasolinePrice(500)
        }
        if(setOption === "Детское кресло"){
            setChildChairPrice(200)
        }
        setExtraOptPrice(Math.floor(gasolinePrice + chair))
    }, [setOption, gasolinePrice, chair])

    const activeCheckbox = (value) => {
        chooseExtra(value)
    }


    

    return (
        <div className="extra-input-form">
            {extraOptions ?
            extraOptions.map((option) => (
                <div className="checkbox-form" key={option.id}>
                        <ReactSVG src={setOption === option.category ? checkboxActive : checkboxDufault} className="checkbox-pic" alt="checkbox" onClick={() => activeCheckbox(option.category)}/>
                    <div className={setOption === option.category ? "checkbox-value" : "checkbox-value-undefined"}>
                        {option.value}
                    </div>
                </div>
            )): null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        setOption: state.setOption,
        gasolinePrice: state.gasolinePrice,
        chair: state.chair,
        extraOptPrice: state.extraOptPrice,
    }
}

export default connect(mapStateToProps, {
    chooseExtra: chooseExtra,
    setGasolinePrice: setGasolinePrice,
    setChildChairPrice: setChildChairPrice,
    setExtraOptPrice: setExtraOptPrice,
})(CheckboxInput);