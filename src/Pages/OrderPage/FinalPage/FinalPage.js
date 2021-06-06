import React, { useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Menu from "../../../Components/Menu/Menu";
import Header from "../../../Components/Header/Header";
import OrderLinks from "../../../Components/OrderLinks/OrderLinks";
import OrderMenu from "../../../Components/OrderMunu/OrderMenu";
import FinalPageContent from "./FinalPageContent/FinalPageContent";
import FinishMenu from "../../../Components/FinishMenu/FinishMenu"



const FinalPage = () => {
    const [switchMenu, setSwitchMenu ] = useState(false);

    const menuChange = (qwe) => {
        setSwitchMenu(qwe);
    }

    return(
        <div className="order-page-model">
            <Sidebar menu={menuChange}/>
            <Header />
            <OrderLinks/>
            <FinalPageContent/>
            <Menu switchMenu={switchMenu} menuChange={menuChange}/>
            <OrderMenu />
            <FinishMenu />
        </div>
    );
};


export default FinalPage;