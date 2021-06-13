import React, {useEffect} from "react";
import { connect } from "react-redux";
import {switchFinishMenu, postOrder, setIdLink, getOrder} from "../actions";
import { withRouter, useHistory  } from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./FinishMenu.css"

const FinishMenu = ({ 
    switchFinishMenu, 
    switchFinish, 
    setTown, 
    setAdress, 
    setCar, 
    setColor, 
    setSinceDate, 
    setEndDate, 
    setTariff, 
    totalPrice,
    activeGas,
    activeChair,
    activeRightHand,
    postOrder,
    postedOrder,
    setIdLink,
    getOrder,
    rate,
    getOrderReducer
    }) => {
    const closeMenu = () => {
        switchFinishMenu(!switchFinish)
    }

    

    const result = {
        orderStatusId: {name: "new", id: "5e26a191099b810b946c5d89"},
        cityId: {name: setTown, id: "5ea07ad3099b810b946c6254"},
        pointId: {address: setAdress, name: "центальный", id: "5ea9ba42099b810b946c71d7"},
        address: setAdress,
        carId: setCar,
        color: setColor,
        dateFrom: setSinceDate,
        dateTo: setEndDate,
        rateId: rate,
        price: totalPrice,
        isFullTank: activeGas,
        isNeedChildChair: activeChair,
        isRightWheel: !activeRightHand,
        id: "60c3cff12aed9a0b9b84f511"
    }
    
    let history = useHistory();
    useEffect(() => {
        if(postedOrder.data){
        setIdLink(postedOrder.data.id)
        getOrder(postedOrder.data.id)
        history.push(`${postedOrder.data.id}`)
        }
    }, [postedOrder])

    const requestValues = () => {
        postOrder(result)
    }

    return(
        <div className={switchFinish === true ? "finish-menu-active" : "finish-menu"}>
            <div className="ordr-menu-form">
                <div>
                <div className="confirm-text">
                    Подтвердите заказ
                </div>
                
                    <div className="option-btns">
                    <div className="confirm" onClick={() => requestValues()}>
                    
                        <Button 
                            text={"Подтвердить"} 
                            width={"100%"} 
                            activeBTN={"order-btn"} 
                            disabled={""}
                            background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}
                        />
                        
                    </div>
                    
                    <div className="back-btn-form" onClick={() => closeMenu()}>
                        <Button 
                            text={"Вернуться"} 
                            width={"100%"} 
                            activeBTN={"order-btn"} 
                            disabled={""} 
                            background={"linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"}
                        />
                    </div>
                </div>: null
                
                </div>
            </div>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        switchFinish: state.switchFinish,
        setTown: state.setTown,
        setAdress: state.setAdress,
        setCar: state.setCar,
        setColor: state.setColor,
        setSinceDate: state.setSinceDate,
        setEndDate: state.setEndDate,
        setTariff: state.setTariff,
        totalPrice: state.totalPrice,
        activeGas: state.activeGas,
        activeChair: state.activeChair,
        activeRightHand: state.activeRightHand,
        postedOrder: state.postedOrder,
        rate: state.rate,
        getOrderReducer: state.getOrderReducer
    }
}

export default withRouter(connect(mapStateToProps, {
    switchFinishMenu: switchFinishMenu,
    postOrder: postOrder,
    setIdLink: setIdLink,
    getOrder: getOrder,
})(FinishMenu));

