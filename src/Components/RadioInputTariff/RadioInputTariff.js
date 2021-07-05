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
    const [price, setPrice] = useState(0);

    useEffect(() => {
        setRate()
        setMinutesPrice(Math.floor(diff/(1000 * 60)))
        setDaysPrice(Math.floor(diff/(1000 * 60 * 60 * 24)*price))
        var setWeeksPrice = (Math.floor(diff/(1000 * 60 * 60 * 24 * 7)*price))
        var setWeeksSharePrice = (Math.floor(diff/(1000 * 60 * 60 * 24 * 7)*price))
        if(setTariff === "Поминутно" && price === 7){
            setTariffPrice(minutesPrice * price)
        }else if(setTariff === "Суточный"){
            setTariffPrice(daysPrice)
        }else if(setTariff === "Недельный"){
            setTariffPrice(setWeeksPrice)
        }else if(setTariff === "Недельный (Акция!)"){
            setTariffPrice(setWeeksSharePrice)
        }if(setTariff === "Поминутно" && price === 1000){
            setTariffPrice(minutesPrice * price)
        }
    }, [diff, setTariff, price])
     
    const activeRadio = (name, price) => {
        chooseTariff(name) 
        setPrice(price)
    }

    const showradioInputsBlock = () => {
            return rate.data.map((rate) => (
                <div className={indent} key={rate.id}>
                    {rate.rateTypeId ?
                    <div className={setTariff === rate.rateTypeId.name && price === rate.price ? "radio-input-active" : "radio-input"} key={rate.id}>
                    <input type="radio" id={rate.id} className="radio"></input>
                    <label for={rate.id} onClick={() => activeRadio(rate.rateTypeId.name, rate.price)}>
                        {rate.rateTypeId.name}, {rate.price}/{rate.rateTypeId.unit}
                    </label>
                </div> : null
                }
                </div>
            ));
    }

    console.log(price)

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