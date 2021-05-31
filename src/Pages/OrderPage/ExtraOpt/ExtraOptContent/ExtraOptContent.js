import React, { useState, useEffect } from "react";
import OrderInf from "../../../../Components/OrderInf/OrderInf";
import exitBtn from "../../../../assets/exitBtn.svg";
import RadioInputTariff from "../../../../Components/RadioInputTariff/RadioInputTariff";
import RadioInputColor from "../../../../Components/radioInputColor/radioInputColor";
import CheckboxInput from "../../../../Components/CheckboxInput/CheckboxInput";
import ButtonCart from "../../../../Components/ButtonCart/ButtonCart";
import Button from "../../../../Components/Button/Button";
import {chooseSinceDate, chooseEndDate, setHours, setDays, setDiff} from "../../../../Components/actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "./ExtraOptContent.css";
import "react-datepicker/dist/react-datepicker.css";


const ModelContent = ({ 
    chooseSinceDate,
    setSinceDate,
    chooseEndDate, 
    setEndDate, 
    setColor, 
    setTariff, 
    setOption, 
    setHours, 
    setDays, 
    setDiff, 
    diff }) => {
    const [ activeBTN, setActiveBTN] = useState(0)
    

    var hour = 1000 * 60 * 60;
            var hours = Math.floor(diff/hour)
            var days = Math.floor(hours/24);
            setHours(Math.floor(days * 24 - hours));
            setDays(days)
            

    

    useEffect(() => {
        if(setSinceDate !== null && setEndDate !== null){
            setDiff(Math.floor(setEndDate - setSinceDate))
        }
        if(setColor !== null && setTariff !== "" && setOption !== "" && setSinceDate !== null && setEndDate !== null){
            setActiveBTN(1);
        }
    }, [setSinceDate, setEndDate, setColor, setTariff, setOption])

    const sinceDate = (event) => {
        console.log(Date.parse(event))
        chooseSinceDate(Date.parse(event))
    }

    const endDate = ( event ) => {
        console.log(Date.parse(event))
        chooseEndDate(Date.parse(event))
    } 

    

    return(
        <div className="extra-content">
            <div className="extra-left-side">
                <div className="color-pic-form">
                    <li className="color-header">Цвет</li>
                        <RadioInputColor style={"flex"} indent={"radio-input"}/>
                </div>
                <div className="data-input-form">
                <li className="data-header">Дата аренды</li>
                <form className="input-date-form">
                        <div className="since-date">С </div>
                        <DatePicker 
                            selected={setSinceDate} 
                            onChange={sinceDate} 
                            dateFormat={"dd.MM.yyyy HH:mm"}
                            minDate={new Date()}
                            showTimeSelect
                            timeFormat={"HH:mm"}
                            className="data-input"
                            placeholderText="Введите дату и время ..."
                        />
                            <button type="reset" className="reset-data-btn" onClick={() => chooseSinceDate(null)}>
                                <img src={`${exitBtn}`}  />
                            </button> 
                </form>
                <form className="input-date-form">
                        <div className="since-date">По </div>
                        <DatePicker 
                            selected={setEndDate} 
                            onChange={endDate} 
                            dateFormat={"dd.MM.yyyy HH:mm"}
                            minDate={setSinceDate}
                            showTimeSelect
                            timeFormat={"HH:mm"}
                            className="data-input"
                            placeholderText="Введите дату и время ..."
                        />
                            <button type="reset" className="reset-data-btn" onClick={() => chooseEndDate(null)}>
                                <img src={`${exitBtn}`}  />
                            </button> 
                </form>
                <div>
                </div>
                </div>
                <div className="tariff-form">
                    <li className="tariff-header">Тарифы</li>
                        <RadioInputTariff style={"block"} diff={diff} indent={"radio-no-indent"}/>
                    </div>
                <div className="extra-form">
                    <li className="tariff-header">Доп услуги</li>
                        <CheckboxInput />
                </div>
                <div className="sized-loc-btn-form">
                    <ButtonCart />
                    {activeBTN !== 0 ? <Button text={"Итого"} width={"100%"} activeBTN={"order-btn"} disabled={""}/> : 
                        <Button text={"Итого"} width={"100%"} activeBTN={"unactive-btn"} disabled={"disabled"}/>}
                </div>
            </div>
            <OrderInf buttonName={"Итого"} activeBTN={activeBTN}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        setLocInfo: state.setLocInfo,
        setCar: state.setCar,
        setColor: state.setColor,
        setSinceDate: state.setSinceDate,
        setEndDate: state.setEndDate,
        setTariff: state.setTariff,
        setOption: state.setOption,
        diff: state.diff
    }
}

export default connect(mapStateToProps, {
    chooseSinceDate: chooseSinceDate,
    chooseEndDate: chooseEndDate,
    setHours: setHours,
    setDays: setDays,
    setDiff: setDiff,
})(ModelContent);