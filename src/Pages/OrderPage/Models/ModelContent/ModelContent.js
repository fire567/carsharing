import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OrderInf from "../../../../Components/OrderInf/OrderInf";
import RadioInputModel from "../../../../Components/RadioInputModel/RadioInputModel";
import CarList from "../../../../Components/CarList/CarList";
import ButtonCart from "../../../../Components/ButtonCart/ButtonCart";
import Button from "../../../../Components/Button/Button";
import "./ModelContent.css";


const ModelContent = ({ setCar }) => {

    return(
        <div className="model-content">
            <div className="model-left-side">
                <RadioInputModel style={"flex"} indent={"radio-input"}/>
                <CarList />
                <div className="sized-loc-btn-form">
                    <ButtonCart />
                    {setCar.length !== 0 ? 
                    <Link to = "/order-page/extraopt">
                        <Button 
                            text={"Дополнительно"} 
                            width={"100%"} 
                            activeBTN={"order-btn"} 
                            disabled={""}
                            background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}
                        />
                    </Link> : 
                        <Button 
                            text={"Дополнительно"} 
                            width={"100%"} 
                            activeBTN={"unactive-btn"} 
                            disabled={"disabled"}
                            background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}
                        />}
                </div>
            </div>
            <OrderInf buttonName={"Дополнительно"} activeBTN={setCar} link={"/order-page/extraopt"}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        setLocInfo: state.setLocInfo,
        setCar: state.setCar,
    }
}

export default connect(mapStateToProps)(ModelContent);