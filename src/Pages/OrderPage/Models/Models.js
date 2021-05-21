import React, { useState } from "react";
import ModelContent from "./ModelContent/ModelContent";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Menu from "../../../Components/Menu/Menu";
import Header from "../../../Components/Header/Header";
import OrderLinks from "../../../Components/OrderLinks/OrderLinks";
import OrderMenu from "../../../Components/OrderMunu/OrderMenu";
import "./Models.css";


const Models = () => {
    const [switchMenu, setSwitchMenu ] = useState(false);

    const menuChange = (qwe) => {
        setSwitchMenu(qwe);
    }

    return(
        <div className="order-page-model">
            <Sidebar menu={menuChange}/>
            <Header />
            <OrderLinks activeLink={1}/>
            <ModelContent />
            <Menu switchMenu={switchMenu} menuChange={menuChange}/>
            <OrderMenu />
        </div>
    );
};


export default Models;