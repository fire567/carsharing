import React from "react";
import { connect } from "react-redux";
import OrderInf from "../../../../Components/OrderInf/OrderInf";
import RadioInputModel from "../../../../Components/RadioInputModel/RadioInputModel";
import CarList from "../../../../Components/CarList/CarList";
import ButtonCart from "../../../../Components/ButtonCart/ButtonCart";
import Button from "../../../../Components/Button/Button";
import "./ModelContent.css";


const ModelContent = ({ setLocInfo }) => {
    const radioInputs = [
        {id: 0, value: "Все модели", category: null },
        {id: 1, value: "Эконом", category: "Эконом"},
        {id: 2, value: "Премиум", category: "Премиум"},
    ]

    return(
        <div className="model-content">
            <div className="model-left-side">
                <RadioInputModel radioInputs={radioInputs}/>
                <CarList />
                <div className="sized-loc-btn-form">
                    <ButtonCart />
                    {setLocInfo != 0 ? <Button text={"Выбрать модель"} width={"100%"} activeBTN={"order-btn"} disabled={""}/> : 
                        <Button text={"Выбрать модель"} width={"100%"} activeBTN={"unactive-btn"} disabled={"disabled"}/>}
                </div>
            </div>
            <OrderInf />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        setLocInfo: state.setLocInfo
    }
}

export default connect(mapStateToProps)(ModelContent);