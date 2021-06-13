import React, { useState, useEffect } from "react";
import {ReactSVG} from "react-svg";
import radioDefault from "../../assets/radioDefault.svg";
import radioActive from "../../assets/radioActive.svg";
import { connect } from "react-redux";
import { chooseTariff, setDaysPrice, setMinutesPrice, setTariffPrice, setRate } from "../actions/index";

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
    setRate,
    rate,
    }) => {

    useEffect(() => {
        setRate()
        setMinutesPrice(Math.floor(diff/(1000 * 60) * 7))
        setDaysPrice(Math.floor(diff/(1000 * 60 * 60 * 24)*1999))
        var setWeeksPrice = (Math.floor(diff/(1000 * 60 * 60 * 24 * 7)*7499))
        var setWeeksSharePrice = (Math.floor(diff/(1000 * 60 * 60 * 24 * 7)*6999))
        if(setTariff === "Поминутно"){
            setTariffPrice(minutesPrice)
        }else if(setTariff === "Суточный"){
            setTariffPrice(daysPrice)
        }else if(setTariff === "Недельный"){
            setTariffPrice(setWeeksPrice)
        }else if(setTariff === "Недельный (Акция!)"){
            setTariffPrice(setWeeksSharePrice)
        }
    }, [diff, setTariff])
     
    const activeRadio = (value) => {
        chooseTariff(value) 
    }

    const showradioInputsBlock = () => {
            return rate.data.map((rate) => (
                <div className={indent} key={rate.id}>
                    {rate.rateTypeId ?
                    <div className={setTariff === rate.rateTypeId.name ? "radio-input-active" : "radio-input"} key={rate.id}>
                    <input type="radio" id={rate.id} className="radio"></input>
                    <label for={rate.id} onClick={() => activeRadio(rate.rateTypeId.name)}>
                        {rate.rateTypeId.name}, {rate.price}/{rate.rateTypeId.unit}
                    </label>
                </div> : null
                }
                </div>
            ));
    }

    return (
        <div className="radio-input-form" style={{display: `${style}`}}>
            {rate.data ?
                showradioInputsBlock() : null
            }
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
        rate: state.rate,
    }
}

export default connect(mapStateToProps, {
    chooseTariff: chooseTariff,
    setTariffPrice: setTariffPrice,
    setMinutesPrice: setMinutesPrice,
    setDaysPrice: setDaysPrice,
    setRate: setRate,
    
})(RadioInputTariff);