import React from "react";
import Button from "../Button/Button";
import "./OrderInf.css";

const OrderInf = () => {
    return(
        <div className="loc-right-side">
            <div className="order-text">
                Ваш заказ:
            </div>
            <div className="pick-up-point">
                <div className="pick-up-text">
                    Пункт выдачи
                </div>
                <div className="point-line">
                </div>
                <div className="picked-loc">
                    <div className="picked-town">
                        Ульяновск,
                    </div>
                    <div className="picked-street">
                        Нариманова 42
                    </div>
                </div>
            </div>
            <div className="price-block">
                <div className="price-name">
                    Цена:
                </div>
                <div className="price">
                    от 8 000 до 15 000 ₽
                </div>
            </div>
            <div className="loc-btn-form">
                <Button text={"Выбрать модель"} width={"100%"}/>
            </div>
        </div>
    )
}

export default OrderInf;