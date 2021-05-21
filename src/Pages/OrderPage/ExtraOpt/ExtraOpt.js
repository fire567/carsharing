import React, { useState } from "react";
import ExtraOptContent from "./ExtraOptContent/ExtraOptContent"
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Menu from "../../../Components/Menu/Menu";
import Header from "../../../Components/Header/Header";
import OrderLinks from "../../../Components/OrderLinks/OrderLinks";


const ExtraOpt = () => {
    const [switchMenu, setSwitchMenu ] = useState(false);

    const menuChange = (qwe) => {
        setSwitchMenu(qwe);
    }

    return(
        <div className="order-page-model">
            <Sidebar menu={menuChange}/>
            <Header />
            <OrderLinks activeLink={2}/>
            <ExtraOptContent />
            <Menu switchMenu={switchMenu} menuChange={menuChange}/>
        </div>
    );
};


export default ExtraOpt;