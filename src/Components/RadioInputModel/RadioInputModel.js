import React from "react";
import {ReactSVG} from "react-svg";
import radioDefault from "../../assets/radioDefault.svg";
import radioActive from "../../assets/radioActive.svg";
import { connect } from "react-redux";
import { changeCategory } from "../actions/index";
import "./RadioInputModel.css";

const RadioInputModel = ({ changeCategory, style, indent, category }) => {
    const activeRadio = (category) => {
        changeCategory(category)
    }

    const radioInputs = [
        {id: 0, value: "Все модели", category: null },
        {id: 1, value: "Эконом", category: "Эконом"},
        {id: 2, value: "Спорт", category: "Спорт"},
        {id: 3, value: "Супер Эконом", category: "Супер Эконом"},
    ]

    return (
        <div className="radio-input-form" style={{display: `${style}`}}>
            {
            radioInputs.map((item) => (
                <div className={indent} key={item.id}>
                    {category === item.category ? 
                        <ReactSVG src={radioActive} className="radio-pic" onClick={() => activeRadio(item.category)} alt="radio"/> :
                        <ReactSVG src={radioDefault} className="radio-pic" onClick={() => activeRadio(item.category)} alt="radio"/>
                    }
                    <li className="radio-value">
                        {item.value}
                    </li>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        category: state.category
    }
}

export default connect(mapStateToProps, {
    changeCategory:changeCategory,
})(RadioInputModel);