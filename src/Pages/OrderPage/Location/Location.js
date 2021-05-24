import React from "react";
import OrderInf from "../../../Components/OrderInf/OrderInf";
import Map from "../../../Components/Map/Map";
import CityInput from "../../../Components/Inputs/CityInput";
import AddressInput from "../../../Components/Inputs/AddressInput";
import ButtonCart from "../../../Components/ButtonCart/ButtonCart";
import Button from "../../../Components/Button/Button";
import { connect } from "react-redux";
import "./Location.css";

const Location = ({ setLocInfo }) => {
    localStorage.setItem('locInf', JSON.stringify(setLocInfo))

    return(
        <div className="loc-content">
            <div className="loc-left-side">
                <div className="input-loc">
                    <CityInput />
                    <AddressInput />
                </div>
                <Map />
                <div className="sized-loc-btn-form">
                    <ButtonCart />
                    {setLocInfo != 0 ? <Button text={"Выбрать модель"} width={"100%"} activeBTN={"order-btn"} disabled={""}/> : 
                        <Button text={"Выбрать модель"} width={"100%"} activeBTN={"unactive-btn"} disabled={"disabled"}/>}
                </div>
            </div>
            <OrderInf buttonName={"Выбрать модель"} activeBTN={setLocInfo.length} link={"/carsharing/order-page/model"}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        setLocInfo: state.setLocInfo
    }
}


export default connect(mapStateToProps)(Location);