import React, { useEffect } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { locInfo, chooseCar } from "../actions/index";
import { fetchPoints } from "../../Components/actions/index";
import "./OrderInf.css";

const OrderInf = ({ setTown, points, setAdress, locInfo, fetchPoints, setCar, setLocInfo, cartReducer, buttonName, chooseCar, activeBTN, link, setColor}) => {
    localStorage.setItem('car', JSON.stringify(setCar))
    localStorage.setItem('color', JSON.stringify(setColor))

    useEffect(() => {
        fetchPoints()
        if(points.data != undefined){
        locInfo(points.data.filter((point) => point.cityId != null && point.cityId.name === setTown &&  point.address === setAdress))
            if(setLocInfo.length === 0){
                //alert("dfg")
                chooseCar([])
            }
        }
      }, [setTown, setAdress, setLocInfo.length ])


    
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

    const showColorInf = () => {
        return (
            <div className="item-form">
                <div className="item-name">
                    Цвет
                </div>
                <div className="item-line">
                </div>
                <div className="item-value">
                        {setColor}
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
                {points.data === undefined ? null : showPointInf()}
                {setCar.name != null && setLocInfo != [] ? showModelInf() : null}
                {setColor != null && setLocInfo != [] ? showColorInf() : null}
                {setCar.name != null && setLocInfo != 1 ? 
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
                {activeBTN != 0 && activeBTN != undefined ? <Link to = {link}><Button text={`${buttonName}`} width={"100%"} activeBTN={"order-btn"} disabled={""}/></Link> : 
                    <Button text={`${buttonName}`} width={"100%"} activeBTN={"unactive-btn"} disabled={"disabled"}/>}
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
        setColor: state.setColor,
    }
}

export default connect(mapStateToProps, {
    locInfo: locInfo,
    fetchPoints: fetchPoints,
    chooseCar: chooseCar,
})(OrderInf);