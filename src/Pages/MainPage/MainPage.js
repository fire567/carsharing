import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Content from "./Content";
import Menu from "../../Components/Menu/Menu";
import StateManager from "react-select";



const MainPage = ({getOrderReducer}) => {
  const [switchMenu, setSwitchMenu ] = useState(false);

  const menuChange = (qwe) => {
    setSwitchMenu(qwe);
  }

  console.log(getOrderReducer);

  return (
    <div className="qwe">
      <Sidebar menu={menuChange}/>
      <Content />
      <Menu switchMenu={switchMenu} menuChange={menuChange}/>
    </div>
  );
}


export default MainPage;
