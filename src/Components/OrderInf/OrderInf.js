import React, { useEffect } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clear } from "redux-localstorage-simple";
import ShowExtraInf from "./ShowExtraInf/ShowExtraInf";
import "./OrderInf.css";

import { 
    locInfo, 
    chooseCar, 
    chooseExtra, 
    chooseTariff, 
    chooseColor, 
    chooseSinceDate, 
    chooseEndDate, 
    setTariffPrice, 
    setTotalPrice, 
    setActiveLink,
    setActiveExtraBTN,
    switchFinishMenu,
    setGasolinePrice,
    setChildChairPrice,
    setExtraOptPrice,
    setActiveGas,
    setActiveChair,
    setRightHandActive,
    setRightHandPrice,
    fetchPoints,
    changeTown, 
    changeAdress,
    postOrder,
} from "../actions/index";

const OrderInf = ({ 
    setTown, 
    points, 
    setAdress, 
    locInfo, 
    fetchPoints, 
    setCar, 
    setLocInfo, 
    cartReducer, 
    buttonName, 
    chooseCar, 
    activeBTN, 
    link, 
    setColor,
    days,
    hours,
    setSinceDate,
    setEndDate,
    setTariff,
    setOption,
    chooseExtra,
    chooseTariff,
    chooseColor,
    chooseSinceDate,
    chooseEndDate,
    tariffPrice, 
    setTariffPrice,
    setTotalPrice,
    totalPrice,
    setActiveLink,
    switchFinishMenu,
    switchFinish,
    extraOptPrice,
    activeGas,
    activeChair,
    activeRightHand,
    setGasolinePrice,
    setChildChairPrice,
    setExtraOptPrice,
    setActiveExtraBTN,
    setActiveGas,
    setActiveChair,
    setRightHandActive,
    setRightHandPrice,
    getOrderReducer,
    changeTown, 
    changeAdress,
    postOrder}) => {


    useEffect(() => {
        
        if(setLocInfo.length === 0){
            chooseCar([])
            setActiveLink(0)
            setActiveExtraBTN(0)
            setTariffPrice(0)
            setGasolinePrice(0)
            setChildChairPrice(0)
            setExtraOptPrice(0)
            setActiveGas(false)
            setActiveChair(false)
            setRightHandActive(true)
            setRightHandPrice(0)
        }
        if(setCar.length === 0 && setLocInfo.length !== 0){
            chooseExtra("")
            chooseTariff("")
            chooseColor(null)
            chooseSinceDate(null)
            chooseEndDate(null)
            setTariffPrice(0)
            setActiveLink(1)
            setActiveExtraBTN(0)
            setTariffPrice(0)
            setGasolinePrice(0)
            setChildChairPrice(0)
            setExtraOptPrice(0)
            setActiveGas(false)
            setActiveChair(false)
            setRightHandActive(true)
            setRightHandPrice(0)
        }
           
        fetchPoints()
        if(points.data != undefined){
        locInfo(points.data.filter((point) => point.cityId != null && point.cityId.name === setTown &&  point.address === setAdress))
            
        }
      }, [setTown, setAdress, setLocInfo.length])
    
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

    const showDateInf = () => {
        return (
            <div className="item-form">
                <div className="item-name">
                    Длительность аренды
                </div>
                <div className="item-line">
                </div>
                <div className="item-value">
                        {days}д. {Math.abs(hours)}ч.
                </div>
            </div>
        )
    }

    const showTariffInf = () => {
        return (
            <div className="item-form">
                <div className="item-name">
                    Тариф
                </div>
                <div className="item-line">
                </div>
                <div className="item-value">
                    {setTariff}
                </div>
            </div>
        )
    }

    const calculatePrice = () => {
        setTotalPrice(Math.floor(setCar.priceMin + tariffPrice + extraOptPrice))
        return totalPrice
    }

    const showPrice = () => {
            if(setCar.length !== 0 && setLocInfo != 1 && extraOptPrice === 0 && tariffPrice === 0){
                return(
                <div className="price-block">
                        <div className="price-name">
                            Цена:
                        </div>
                        <div className="price">
                            от {setCar.priceMin} до {setCar.priceMax} ₽
                        </div>
                </div>
                )
            }else if(tariffPrice !== 0 || extraOptPrice !== 0){
                return(
                    <div className="price-block">
                        <div className="price-name">
                            Цена:
                        </div>
                        <div className="price">
                            от {calculatePrice()}  ₽
                        </div>
                    </div>
                )
            }
    }

    const clearData = () => {
        changeTown("")
        changeAdress("")
    }

    const showButton = () => {
        if(window.location.hash.split('carsharing')[1] === "/order-page/final-page"){
            return(
            <Link to={link}>
            <div className="loc-btn-form" onClick={() => switchMenu()}>
                    <Button 
                        text={`${buttonName}`} 
                        width={"100%"} 
                        activeBTN={"order-btn"} 
                        disabled={""}
                        background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}
                    />
            </div>
            </Link>
            )
        }else if(getOrderReducer.data){
            if(window.location.hash.split('carsharing')[1] === `/order-page/${getOrderReducer.data.id}`){
            return(
            <Link to = "/order-page/loc">
            <div className="loc-btn-form" onClick={() => clearData()}>
                    <Button 
                        text={`${buttonName}`} 
                        width={"100%"} 
                        activeBTN={"order-btn"} 
                        disabled={""}
                        background={"linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"}
                    />
            </div>
            </Link>
            )}
        }return (
            <Link to={link}>
            <div className="loc-btn-form">
                {activeBTN !== 0 ? 
                    <Button 
                    text={`${buttonName}`} 
                    width={"100%"} 
                    activeBTN={"unactive-btn"} 
                    disabled={""}
                    background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}
                /> : 
                <Button 
                    text={`${buttonName}`} 
                    width={"100%"} 
                    activeBTN={""} 
                    disabled={"disabled"}
                    background={""}
                />
                }
            </div>
            </Link>
        )
    }

    const switchMenu = () => {
        switchFinishMenu(!switchFinish)
    }

    return(
        <div className="loc-right-side">
            <div className={cartReducer === true ? "active" : "hidden-part"}>
                <div className="order-text">
                    Ваш заказ:
                </div>
                {!points.data ? null : showPointInf()}
                {setCar.length !== 0 && setLocInfo.length > 0 ? showModelInf() : null}
                {setColor && setLocInfo.length > 0 ? showColorInf() : null}
                {setTariff && setLocInfo.length > 0 ? showTariffInf() : null}
                {setSinceDate && setEndDate && setLocInfo.length > 0 ? showDateInf() : null}
                {activeGas && setLocInfo.length > 0 ? <ShowExtraInf option={"Полный бак"}/> : null}
                {activeChair && setLocInfo.length > 0 ? <ShowExtraInf option={"Детское кресло"}/> : null}
                {!activeRightHand && setLocInfo.length > 0 ? <ShowExtraInf option={"Правый руль"}/> : null}
                {showPrice()}
                    {showButton()}
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
        setSinceDate: state.setSinceDate,
        setEndDate: state.setEndDate,
        setTariff: state.setTariff,
        setOption: state.setOption,
        hours: state.hours,
        days: state.days,
        tariffPrice: state.tariffPrice,
        totalPrice: state.totalPrice,
        switchFinish: state.switchFinish,
        extraOptPrice: state.extraOptPrice,
        activeGas: state.activeGas,
        activeChair: state.activeChair,
        activeRightHand: state.activeRightHand,
        getOrderReducer: state.getOrderReducer
    }
}

export default connect(mapStateToProps, {
    locInfo: locInfo,
    fetchPoints: fetchPoints,
    chooseCar: chooseCar,
    chooseExtra: chooseExtra,
    chooseTariff: chooseTariff,
    chooseColor: chooseColor,
    chooseSinceDate: chooseSinceDate,
    chooseEndDate: chooseEndDate,
    setTariffPrice: setTariffPrice,
    setTotalPrice:setTotalPrice,
    setActiveLink: setActiveLink,
    setActiveExtraBTN: setActiveExtraBTN,
    switchFinishMenu: switchFinishMenu,
    setGasolinePrice: setGasolinePrice,
    setChildChairPrice: setChildChairPrice,
    setExtraOptPrice: setExtraOptPrice,
    setActiveGas: setActiveGas,
    setActiveChair: setActiveChair,
    setRightHandActive: setRightHandActive,
    setRightHandPrice: setRightHandPrice,
    changeTown: changeTown,
    changeAdress: changeAdress,
    postOrder: postOrder,
})(OrderInf);