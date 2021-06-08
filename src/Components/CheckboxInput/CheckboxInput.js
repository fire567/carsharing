import React, { useEffect, useState } from "react";
import {ReactSVG} from "react-svg";
import checkboxDufault from "../../assets/checkboxDefault.svg";
import checkboxActive from "../../assets/checkboxActive.svg";
import { connect } from "react-redux";
import { chooseExtra, setGasolinePrice, setChildChairPrice, setExtraOptPrice, setActiveGas, setActiveChair, setRightHandPrice, setRightHandActive } from "../actions/index";
import "./CheckboxInput.css";

const CheckboxInput = ({ 
    chooseExtra, 
    setOption, 
    gasolinePrice, 
    setGasolinePrice, 
    setChildChairPrice, 
    chair, 
    setExtraOptPrice, 
    extraOptPrice,
    setActiveGas, 
    activeGas,
    setActiveChair,
    activeChair,
    setRightHandPrice,
    setRightHandActive,
    activeRightHand,
    rightHandPrice,
    }) => {

    const extraOptions = [
        {id: 0, value: "Полный бак, 500р", category: "Полный бак"},
        {id: 1, value: "Детское кресло, 200р", category: "Детское кресло"},
        {id: 2, value: "Правый руль, 1600р", category: "Правый руль"},
    ]

    const activeCheckbox = (value) => {
        chooseExtra(value)
        if(value === "Полный бак"){
            setActiveGas(!activeGas)
            if(activeGas === true){
                setGasolinePrice(500)
            }
            else setGasolinePrice(0)
        }   
        if(value === "Детское кресло"){
            setActiveChair(!activeChair)
            if(activeChair === false){
                setChildChairPrice(200)
            }
            else setChildChairPrice(0) 

        }else if(value === "Правый руль"){
            setRightHandActive(!activeRightHand)
            if(activeRightHand === true){
                setRightHandPrice(1600)
            }
            else setRightHandPrice(0) 
        }

        
    }

    
    

    useEffect(() => {
        /*
        setActiveGas(!activeGas)
        if(setOption === "Полный бак"){
            if(activeGas === true){
                setGasolinePrice(500)
            }
            else setGasolinePrice(0)
        }
        else if(setOption === "Детское кресло"){
            if(activeChair === true){
                setChildChairPrice(200)
            }
            else setChildChairPrice(0) 
        }
        else if(setOption === "Правый руль"){
            if(activeRightHand === true){
                setRightHandPrice(1600)
            }
            else setRightHandPrice(0) 
        }
        */
        setExtraOptPrice(Math.floor(gasolinePrice + chair + rightHandPrice))
    }, [setOption, gasolinePrice, chair, activeGas, chair, rightHandPrice])

    

    return (
        <div className="extra-input-form">
            {extraOptions ?
            extraOptions.map((option) => (
                <div className="checkbox-form" key={option.id}>
                    <input type="checkbox" className="checkbox" id={option.id} ></input>
                    <label for={option.id} className={"checkbox-value-undefined"} onClick={() => activeCheckbox(option.category)}>
                        {option.value}
                    </label>
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
        activeGas: state.activeGas,
        activeChair: state.activeChair,
        activeRightHand: state.activeRightHand,
        rightHandPrice: state.rightHandPrice,
    }
}

export default connect(mapStateToProps, {
    chooseExtra: chooseExtra,
    setGasolinePrice: setGasolinePrice,
    setChildChairPrice: setChildChairPrice,
    setExtraOptPrice: setExtraOptPrice,
    setActiveGas: setActiveGas,
    setActiveChair: setActiveChair,
    setRightHandActive: setRightHandActive,
    setRightHandPrice: setRightHandPrice,
})(CheckboxInput);