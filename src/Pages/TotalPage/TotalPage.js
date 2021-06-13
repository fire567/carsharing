import React, {useState} from "react";
import {connect} from "react-redux";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import OrderIdInf from "../../Components/OrderIdInf/OrderIdInf";
import Menu from "../../Components/Menu/Menu";
import OrderMenu from "../../Components/OrderMunu/OrderMenu"
import TotalPageContent from "./TotalPageContent/TotalPageContent";
import "./TotalPage.css";

const TotalPage = () => {
    const [switchMenu, setSwitchMenu ] = useState(false);

    const menuChange = (changed) => {
        setSwitchMenu(changed);
    }

    return(
        <div className="total-page">
            <Sidebar menu={menuChange}/>
            <Header/>
            <OrderIdInf/>
            <TotalPageContent/>
            <Menu switchMenu={switchMenu} menuChange={menuChange}/>
            <OrderMenu />
        </div>
    );
};

export default TotalPage;