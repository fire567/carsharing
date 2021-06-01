import React, { useState, useEffect } from "react";
import Location from "./Location/Location";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Menu from "../../Components/Menu/Menu";
import Header from "../../Components/Header/Header";
import OrderLinks from "../../Components/OrderLinks/OrderLinks";
import { connect } from "react-redux";
import { showCart } from "../../Components/actions";
import OrderMenu from "../../Components/OrderMunu/OrderMenu";
import {fetchCities, fetchPoints } from "../../Components/actions/index";
import "./OrderPage.css";

const OrderPage = ({ fetchPoints, fetchCities }) => {
    const [switchMenu, setSwitchMenu ] = useState(false);
    
    

    useEffect(() => {
        fetchPoints();
        fetchCities();
      }, [])
    

    const menuChange = (changed) => {
        setSwitchMenu(changed);
    }

    return(
        <div className="order-page">
            <Sidebar menu={menuChange}/>
            <Header />
            <OrderLinks/>
            <Location />
            <Menu switchMenu={switchMenu} menuChange={menuChange}/>
            <OrderMenu />
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        cartReducer: state.cartReducer
    }
}

export default connect(mapStateToProps, {
    fetchPoints: fetchPoints,
    fetchCities: fetchCities,
    showCart: showCart,
})(OrderPage);