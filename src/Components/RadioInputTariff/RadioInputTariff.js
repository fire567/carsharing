import React, { useState, useEffect } from "react";
import {ReactSVG} from "react-svg";
import radioDefault from "../../assets/radioDefault.svg";
import radioActive from "../../assets/radioActive.svg";
import { connect } from "react-redux";
import { chooseTariff } from "../actions/index";

const RadioInputTariff = ({ style, indent, setTariff, chooseTariff, diff }) => {
    const [ minutes, setMinutes ] = useState(0)
    const radioInputsBlock = [
        {id: 0, value: "Поминутно, 7₽/мин", category: "Поминутно", price: 7},
        {id: 1, value: "На сутки, 1999₽/сутки", category: "На сутки", price: 1999},
    ]

    console.log(minutes)

    useEffect(() => {
        setMinutes(Math.floor(diff/(1000 * 60)))
    }, [diff])
     
    const activeRadio = (value) => {
        chooseTariff(value)
        
    }

    return (
        <div className="radio-input-form" style={{display: `${style}`}}>
            {radioInputsBlock ?
            radioInputsBlock.map((item) => (
                <div className={indent} key={item.id}>
                    {setTariff === item.category ? 
                        <ReactSVG src={radioActive} className="radio-pic" onClick={() => activeRadio(item.category, item.price)} alt="radio"/> :
                        <ReactSVG src={radioDefault} className="radio-pic" onClick={() => activeRadio(item.category, item.price)} alt="radio"/>
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
        setTariff: state.setTariff,
    }
}

export default connect(mapStateToProps, {
    chooseTariff: chooseTariff,
})(RadioInputTariff);