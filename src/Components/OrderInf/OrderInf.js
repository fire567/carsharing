import React, { useEffect } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
} from "../actions/index";
import { fetchPoints } from "../../Components/actions/index";
import "./OrderInf.css";

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
    setActiveExtraBTN}) => {


    useEffect(() => {
        
        if(setLocInfo.length === 0){
            chooseCar([])
            setActiveLink(0)
            setActiveExtraBTN(0)
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

    const showExtraInf = () => {
        return (
            <div className="item-form">
                <div className="item-name">
                    {setOption}
                </div>
                <div className="item-line">
                </div>
                <div className="item-value">
                    Да
                </div>
            </div>
        )
    }

    const calculatePrice = () => {
        setTotalPrice(Math.floor(setCar.priceMin + tariffPrice))
        return totalPrice
    }

    const showPrice = () => {
            if(setCar.length !== 0 && setLocInfo != 1 && tariffPrice === 0){
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
            }else if(tariffPrice !== 0){
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

    return(
        <div className="loc-right-side">
            <div className={cartReducer === true ? "active" : "hidden-part"}>
                <div className="order-text">
                    Ваш заказ:
                </div>
                {!points.data ? null : showPointInf()}
                {setCar.length !== 0 && setLocInfo ? showModelInf() : null}
                {setColor && setLocInfo.length > 0 ? showColorInf() : null}
                {setTariff && setLocInfo.length > 0 ? showTariffInf() : null}
                {setSinceDate && setEndDate && setLocInfo != [] ? showDateInf() : null}
                {setOption && setLocInfo != [] ? showExtraInf() : null}
                {showPrice()}
            
            <div className="loc-btn-form">
                {activeBTN != 0 && activeBTN ? <Link to = {link}><Button text={`${buttonName}`} width={"100%"} activeBTN={"order-btn"} disabled={""}/></Link> : 
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
        setSinceDate: state.setSinceDate,
        setEndDate: state.setEndDate,
        setTariff: state.setTariff,
        setOption: state.setOption,
        hours: state.hours,
        days: state.days,
        tariffPrice: state.tariffPrice,
        totalPrice: state.totalPrice,
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
})(OrderInf);