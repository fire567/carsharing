import React, { useState, useEffect } from "react";
import OrderInf from "../../../../Components/OrderInf/OrderInf";
import exitBtn from "../../../../assets/exitBtn.svg";
import RadioInputModel from "../../../../Components/RadioInputModel/RadioInputModel";
import RadioInputColor from "../../../../Components/radioInputColor/radioInputColor";
import CheckboxInput from "../../../../Components/CheckboxInput/CheckboxInput";
import ButtonCart from "../../../../Components/ButtonCart/ButtonCart";
import Button from "../../../../Components/Button/Button";
import { connect } from "react-redux";
import "./ExtraOptContent.css";


const ModelContent = ({ setLocInfo }) => {

    const radioInputsBlock = [
        {id: 0, value: "Поминутно, 7₽/мин"},
        {id: 1, value: "На сутки, 1999₽/сутки"},
    ]

    const extraOptions = [
        {id: 0, value: "Полный бак, 500р"},
        {id: 1, value: "Детское кресло, 200р"},
        {id: 2, value: "Правый руль, 1600р"},
    ]

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
                        <input 
                            type="datetime-local" 
                            placeholder="Введите дату и время ..." 
                            className="data-input" 
                        >
                        </input>
                        
                            <button type="reset" className="reset-data-btn">
                                <img src={`${exitBtn}`}  />
                            </button> 
                </form>
                <form className="input-date-form">
                        <div className="since-date">По </div>
                        <input 
                            type="datetime-local" 
                            placeholder="Введите дату и время ..." 
                            className="data-input" 
                        >
                        </input>
                        
                            <button type="reset" className="reset-data-btn">
                                <img src={`${exitBtn}`}  />
                            </button> 
                </form>
                </div>
                <div className="tariff-form">
                    <li className="tariff-header">Тарифы</li>
                        <RadioInputModel radioInputs={radioInputsBlock} style={"block"} indent={"radio-no-indent"}/>
                    </div>
                <div className="extra-form">
                    <li className="tariff-header">Доп услуги</li>
                        <CheckboxInput option={extraOptions}/>
                </div>
                <div className="sized-loc-btn-form">
                    <ButtonCart />
                    {setLocInfo != 0 ? <Button text={"Итого"} width={"100%"} activeBTN={"order-btn"} disabled={""}/> : 
                        <Button text={"Итого"} width={"100%"} activeBTN={"unactive-btn"} disabled={"disabled"}/>}
                </div>
            </div>
            <OrderInf buttonName={"Итого"}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        setLocInfo: state.setLocInfo,
        setCar: state.setCar
    }
}

export default connect(mapStateToProps)(ModelContent);