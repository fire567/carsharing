import React from "react";
import exitBtn from "../../../assets/exitBtn.svg";
import OrderInf from "../../../Components/OrderInf/OrderInf";
import Map from "../../../Components/Map/Map";
import "./Location.css";

const Location = () => {
    return(
        <div className="loc-content">
            <div className="loc-left-side">
                <div className="input-loc">
                    <div className="input-form">
                        <div className="town-name">Город:</div>
                        <input type="text" placeholder="Начните вводить город ..." className="loc-input"></input>
                        <button type="reset" className="reset-btn">
                            <img src={`${exitBtn}`} />
                        </button>
                    </div>
                    <div className="input-form">
                        <div className="town-name">Пункт выдачи:</div>
                        <input type="text" placeholder="Начните вводить пункт ... " className="loc-input"></input>
                        <button type="reset" className="reset-btn">
                            <img src={`${exitBtn}`} />
                        </button>
                    </div>
                </div>
                <Map />
            </div>
            <OrderInf />
        </div>
    );
};

export default Location;