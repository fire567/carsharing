import React, { useEffect} from "react";
import {ReactSVG} from "react-svg";
import radioDefault from "../../assets/radioDefault.svg";
import radioActive from "../../assets/radioActive.svg";
import { connect } from "react-redux";
import { chooseTariff } from "../actions/index";

const RadioInputTariff = ({ style, indent, setTariff, chooseTariff }) => {
    const radioInputsBlock = [
        {id: 0, value: "Поминутно, 7₽/мин", category: "Поминутно"},
        {id: 1, value: "На сутки, 1999₽/сутки", category: "На сутки"},
    ]
    

    const activeRadio = (value) => {
        chooseTariff(value)
    }

    return (
        <div className="radio-input-form" style={{display: `${style}`}}>
            {radioInputsBlock ?
            radioInputsBlock.map((item) => (
                <div className={indent} key={item.id}>
                    {setTariff === item.category ? 
                        <ReactSVG src={radioActive} className="radio-pic" onClick={() => activeRadio(item.category)} alt="radio"/> :
                        <ReactSVG src={radioDefault} className="radio-pic" onClick={() => activeRadio(item.category)} alt="radio"/>
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
        setTariff: state.setTariff
    }
}

export default connect(mapStateToProps, {
    chooseTariff: chooseTariff
})(RadioInputTariff);