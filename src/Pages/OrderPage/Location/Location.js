import React from "react";
import OrderInf from "../../../Components/OrderInf/OrderInf";
import Map from "../../../Components/Map/Map";
import ButtonCart from "../../../Components/ButtonCart/ButtonCart";
import Button from "../../../Components/Button/Button";
import PointInput from "../../../Components/Inputs/PointInput"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Location.css";

const Location = ({ setLocInfo, setTown, citiesReducer, setAdress, points, getOrderReducer }) => {
    
console.log(getOrderReducer)

    return(
        <div className="loc-content">
            <div className="loc-left-side">
                <div className="input-loc">
                    <PointInput 
                        inputName = {"Город:"}
                        setLoc = {setTown} 
                        locations={citiesReducer} 
                        currentInput={"city"}
                        InputClass={"loc-input"}
                    />
                    <PointInput 
                        inputName = {"Пункт выдачи:"}
                        setLoc = {setAdress} 
                        locations={points} 
                        currentInput={"address"}
                        InputClass={"address-loc-input"}
                    />
                </div>
                <Map />
                <div className="sized-loc-btn-form">
                    <ButtonCart />
                    {setLocInfo != 0 ? 
                    <Link to="/order-page/model">
                        <Button 
                            text={"Выбрать модель"} 
                            width={"100%"} 
                            disabled={""}
                            background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}
                        />
                    </Link> : 
                        <Button 
                            text={"Выбрать модель"} 
                            width={"100%"} 
                            disabled={"disabled"}
                            background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}
                        />}
                </div>
            </div>
            {setLocInfo !== null ?
                <OrderInf buttonName={"Выбрать модель"} activeBTN={setLocInfo.length} link={"/order-page/model"}/> : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        setLocInfo: state.setLocInfo,
        setTown: state.setTown,
        citiesReducer: state.citiesReducer,
        changeTown: state.changeTown,
        setAdress: state.setAdress,
        points: state.points,
        getOrderReducer: state.getOrderReducer
    }
}


export default connect(mapStateToProps)(Location);