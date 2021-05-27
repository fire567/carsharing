import React from "react";
import "./OrderMenu.css";
import {ReactSVG} from "react-svg";
import exit from "../../assets/exit.svg";
import { connect } from "react-redux";
import { showCart } from "../actions/index";
import OrderInf from "../OrderInf/OrderInf";

const OrderMenu = ({ cartReducer, showCart }) => {

    const exitMenu = () => {
        showCart(!cartReducer)
    } 


    return (
        <div className={cartReducer === true ? "ord-menu-form" : "hidden-menu-form"}>
            <ReactSVG src={exit} className="ordr-exit-pic" alt="exit-pic" onClick={() => exitMenu()}/>
            <OrderInf />
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        cartReducer: state.cartReducer
    }
}

export default connect(mapStateToProps, {
    showCart: showCart
})(OrderMenu);