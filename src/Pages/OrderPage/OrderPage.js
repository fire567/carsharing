import React, { useState } from "react";
import Location from "./Location/Location";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Menu from "../../Components/Menu/Menu";
import Header from "../../Components/Header/Header";
import "./OrderPage.css";

const OrderPage = () => {
    const [switchMenu, setSwitchMenu ] = useState(false);

    const menuChange = (qwe) => {
        setSwitchMenu(qwe);
    }

    return(
        <div className="order-page">
            <Sidebar menu={menuChange}/>
            <Header />
            
            <Menu switchMenu={switchMenu} menuChange={menuChange}/>
        </div>
    );
};

export default OrderPage;