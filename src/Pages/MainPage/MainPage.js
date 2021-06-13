import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Content from "./Content";
import Menu from "../../Components/Menu/Menu";



const MainPage = () => {
  const [switchMenu, setSwitchMenu ] = useState(false);

  const menuChange = (qwe) => {
    setSwitchMenu(qwe);
  }

  return (
    <div className="qwe">
      <Sidebar menu={menuChange}/>
      <Content />
      <Menu switchMenu={switchMenu} menuChange={menuChange}/>
    </div>
  );
}

export default MainPage;
