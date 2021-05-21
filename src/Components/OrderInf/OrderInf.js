import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { locInfo, chooseCar } from "../actions/index";
import { fetchPoints } from "../../Components/actions/index";
import ButtonCart from "../../Components/ButtonCart/ButtonCart";
import "./OrderInf.css";
import cartReducer from "../reducers/cartReducer";

const OrderInf = ({ setTown, points, setAdress, locInfo, fetchPoints, setCar, setLocInfo, cartReducer }) => {
    const [ arr, setArr ] = useState(JSON.parse(localStorage.getItem('locInf')))
    localStorage.setItem('locInf', JSON.stringify(arr))
    localStorage.setItem('car', JSON.stringify(setCar))


    useEffect(() => {
        fetchPoints()
        if(points.data != undefined){
        setArr(points.data.filter((point) => point.cityId != null && point.cityId.name === setTown &&  point.address === setAdress))
        locInfo(points.data.filter((point) => point.cityId != null && point.cityId.name === setTown &&  point.address === setAdress).length)
        }
      }, [setTown, setAdress])


    
    const showPointInf = () => {
        return points.data.map((point) => {
            if(point.cityId !== null){
            if(point.cityId.name === setTown &&  point.address === setAdress) {
                return (
                    <div className="item-form" key={point.cityId.id}>
                        <div className="item-name">
                            Пункт выдачи
                        </div>
                        <div className="item-line">
                        </div>
                        <div className="item-value">
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

    const showModelInf = () => {
        return (
            <div className="item-form">
                <div className="item-name">
                    Модель
                </div>
                <div className="item-line">
                </div>
                <div className="item-value">
                        {setCar.name}
                </div>
            </div>
        )
    }
    
    

    return(
        <div className="loc-right-side">
            <div className={cartReducer === true ? "active" : "hidden-part"}>
                <div className="order-text">
                    Ваш заказ:
                </div>
                {points.data === undefined ? "Loading..." : showPointInf()}
                {setCar.name != "" && setLocInfo === 1 ? showModelInf() : null}
                {setCar.name != "" && setLocInfo === 1 ? 
                    <div className="price-block">
                        <div className="price-name">
                            Цена:
                        </div>
                        <div className="price">
                            от {setCar.priceMin} до {setCar.priceMax} ₽
                        </div>
                    </div> : null
                }
            
            <div className="loc-btn-form">
                {arr.length != 0 ? <Button text={"Выбрать модель"} width={"100%"} activeBTN={"order-btn"} disabled={""}/> : 
                    <Button text={"Выбрать модель"} width={"100%"} activeBTN={"unactive-btn"} disabled={"disabled"}/>}
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        setTown: state.setTown,
        points: state.points,
        setAdress: state.setAdress,
        setCar: state.setCar,
        setLocInfo: state.setLocInfo,
        cartReducer: state.cartReducer,
    }
}

export default connect(mapStateToProps, {
    locInfo: locInfo,
    fetchPoints: fetchPoints,
    chooseCar: chooseCar,
})(OrderInf);