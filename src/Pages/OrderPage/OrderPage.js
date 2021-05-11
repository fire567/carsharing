import React, { useState, useEffect } from "react";
import Location from "./Location/Location";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Menu from "../../Components/Menu/Menu";
import Header from "../../Components/Header/Header";
import OrderLinks from "../../Components/OrderLinks/OrderLinks";
import { connect } from "react-redux";
import {fetchCities, fetchPoints } from "../../Components/actions/index";
import "./OrderPage.css";

const OrderPage = ({ fetchPoints, fetchCities }) => {
    const [switchMenu, setSwitchMenu ] = useState(false);

    useEffect(() => {
        fetchPoints();
        fetchCities();
      }, [])
    

    const menuChange = (qwe) => {
        setSwitchMenu(qwe);
    }

    return(
        <div className="order-page">
            <Sidebar menu={menuChange}/>
            <Header />
            <OrderLinks />
            <Location />
            <Menu switchMenu={switchMenu} menuChange={menuChange}/>
        </div>
    );
};

export default connect(null, {
    fetchPoints: fetchPoints,
    fetchCities: fetchCities,
})(OrderPage);