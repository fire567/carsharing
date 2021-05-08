import React, { useState, useEffect } from "react";
import Location from "./Location/Location";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Menu from "../../Components/Menu/Menu";
import Header from "../../Components/Header/Header";
import OrderLinks from "../../Components/OrderLinks/OrderLinks";
import API from "../../apis/API";
import "./OrderPage.css";

const OrderPage = () => {
    const [switchMenu, setSwitchMenu ] = useState(false);

    useEffect(() => {
        const onTermSubmit = async () => {
          const response = await API.get("city/")
          console.log(response.data);
        }   
        onTermSubmit()
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

export default OrderPage;