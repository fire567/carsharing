import React from "react";
import OrderInf from "../../../../Components/OrderInf/OrderInf";
import exitBtn from "../../../../assets/exitBtn.svg";
import RadioInputModel from "../../../../Components/RadioInputModel/RadioInputModel";
import "./ExtraOptContent.css";


const ModelContent = () => {
    const radioInputs = [
        {id: 0, value: "Любой", category: null },
        {id: 1, value: "Красный", category: "Красный"},
        {id: 2, value: "Голубой", category: "Голубой"},
    ]

    return(
        <div className="extra-content">
            <div className="extra-left-side">
                <div className="color-pic-form">
                    <li className="color-header">Цвет</li>
                    <RadioInputModel radioInputs={radioInputs}/>
                </div>
                <div className="data-input-form">
                <li className="data-header">Дата аренды</li>
                <form className="input-form">
                        <div className="town-name">С </div>
                        <input 
                            type="text" 
                            placeholder="Начните вводить пункт ..." 
                            className="address-loc-input" 
                            value={localStorage.getItem('address')} 
                        >
                        </input>
                        
                            <button type="reset" className="reset-btn">
                                <img src={`${exitBtn}`}  />
                            </button> 
                </form>
                </div>
            </div>
            <OrderInf />
        </div>
    )
}

export default ModelContent;