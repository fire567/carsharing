import React, { useState, useEffect } from "react";
import {ReactSVG} from "react-svg";
import radioDefault from "../../assets/radioDefault.svg";
import radioActive from "../../assets/radioActive.svg";
import { connect } from "react-redux";
import { chooseTariff, setDaysPrice, setMinutesPrice, setTariffPrice } from "../actions/index";

const RadioInputTariff = ({ 
    style, 
    indent, 
    setTariff, 
    chooseTariff, 
    tariffPrice, 
    setTariffPrice, 
    setDaysPrice,  
    setMinutesPrice,
    daysPrice,
    minutesPrice,
    diff,
    }) => {
    const radioInputsBlock = [
        {id: 0, value: "Поминутно, 7₽/мин", category: "Поминутно"},
        {id: 1, value: "На сутки, 1999₽/сутки", category: "На сутки"},
    ]

    useEffect(() => {
        setMinutesPrice(Math.floor(diff/(1000 * 60) * 7))
        setDaysPrice(Math.floor(diff/(1000 * 60 * 60 * 24)*1999))
        if(setTariff === "Поминутно"){
            setTariffPrice(minutesPrice)
        }else if(setTariff === "На сутки"){
            setTariffPrice(daysPrice)
        }
    }, [diff, setTariff])
     
    const activeRadio = (value) => {
        chooseTariff(value) 
    }

    const showradioInputsBlock = () => {
            return radioInputsBlock.map((item) => (
                <div className={indent} key={item.id}>
                    <ReactSVG src={setTariff === item.category ? radioActive : radioDefault} className="radio-pic" onClick={() => activeRadio(item.category)} alt="radio"/>
                    <li className={setTariff === item.category ? "radio-value" : "radio-value-unactive"}>
                        {item.value}
                    </li>
                </div>
            ));
    }

    return (
        <div className="radio-input-form" style={{display: `${style}`}}>
            {radioInputsBlock ?
            showradioInputsBlock()
             : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        setTariff: state.setTariff,
        tariffPrice: state.tariffPrice,
        daysPrice: state.daysPrice,
        minutesPrice: state.minutesPrice,
        diff: state.diff,
    }
}

export default connect(mapStateToProps, {
    chooseTariff: chooseTariff,
    setTariffPrice: setTariffPrice,
    setMinutesPrice: setMinutesPrice,
    setDaysPrice: setDaysPrice,
    
})(RadioInputTariff);