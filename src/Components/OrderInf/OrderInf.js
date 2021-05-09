import React from "react";
import Button from "../Button/Button";
import { connect } from "react-redux";
import "./OrderInf.css";

const OrderInf = ({ setTown, points }) => {

    //console.log(points.data)
    //console.log(String(setTown));

    
    const showPointInf = () => {
        return points.data.map((city) => {
            if(city.cityId !== null){
            if(city.cityId.name === setTown) {
                return (
                    <div className="pick-up-point">
                    <div className="pick-up-text">
                        Пункт выдачи
                    </div>
                    <div className="point-line">
                    </div>
                    <div className="picked-loc">
                        <div className="picked-town">
                            {setTown},
                        </div>
                        <div className="picked-street">
                            Нариманова 42
                        </div>
                    </div>
                </div>
                )
            }
        }
        })
    }
    

    return(
        <div className="loc-right-side">
            <div className="order-text">
                Ваш заказ:
            </div>
            {points.data === undefined ? "Loading..." : showPointInf()}
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

const mapStateToProps = (state) => {
    return{
        setTown: state.setTown,
        points: state.points
    }
}

export default connect(mapStateToProps)(OrderInf);