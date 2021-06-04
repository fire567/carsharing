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
        <div className="radio-input-form">
            {radioInputs.map((item) => (
                <div className={indent} key={item.id}>
                        <ReactSVG src={category === item.category ? radioActive : radioDefault} className="radio-pic" onClick={() => activeRadio(item.category)} alt="radio"/>
                        <li className={category === item.category ? "radio-value" : "radio-value-unactive"}>
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