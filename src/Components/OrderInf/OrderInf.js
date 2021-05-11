import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { connect } from "react-redux";
import "./OrderInf.css";

const OrderInf = ({ setTown, points, setAdress }) => {
    const [ arr, setArr ] = useState([])

    useEffect(() => {
        if(points.data != undefined){
        setArr(points.data.filter((point) => point.cityId != null && point.cityId.name === setTown &&  point.address === setAdress))
        }
      }, [setTown, setAdress])


    
    const showPointInf = () => {
        return points.data.map((point) => {
            if(point.cityId !== null){
            if(point.cityId.name === setTown &&  point.address === setAdress) {
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
                            {setAdress}
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
                {arr.length != 0 ? <Button text={"Выбрать модель"} width={"100%"} activeBTN={"order-btn"} /> : 
                    <Button text={"Выбрать модель"} width={"100%"} activeBTN={"unactive-btn"} />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        setTown: state.setTown,
        points: state.points,
        setAdress: state.setAdress,
    }
}

export default connect(mapStateToProps)(OrderInf);