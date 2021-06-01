import React, { useState } from "react";
import ExtraOptContent from "./ExtraOptContent/ExtraOptContent"
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Menu from "../../../Components/Menu/Menu";
import Header from "../../../Components/Header/Header";
import OrderLinks from "../../../Components/OrderLinks/OrderLinks";
import OrderMenu from "../../../Components/OrderMunu/OrderMenu";


const ExtraOpt = () => {
    const [switchMenu, setSwitchMenu ] = useState(false);

    const menuChange = (qwe) => {
        setSwitchMenu(qwe);
    }

    return(
        <div className="order-page-model">
            <Sidebar menu={menuChange}/>
            <Header />
            <OrderLinks/>
            <ExtraOptContent />
            <Menu switchMenu={switchMenu} menuChange={menuChange}/>
            <OrderMenu />
        </div>
    );
};


export default ExtraOpt;