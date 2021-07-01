import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeCategory } from "../actions/index";
import "./RadioInputModel.css";

const RadioInputModel = ({ changeCategory, category}) => {

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
                <div className={category === item.category ? "radio-input-active" : "radio-input"} key={item.id} >
                    <input type="radio" id={item.id} className="radio"></input>
                    <label for={item.id} onClick={() => activeRadio(item.category)}>
                        {item.value}
                    </label>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        category: state.category,
    }
}

export default connect(mapStateToProps, {
    changeCategory:changeCategory,
})(RadioInputModel);