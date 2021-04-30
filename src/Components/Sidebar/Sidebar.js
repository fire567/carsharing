import React, { useState } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import "./Sidebar.css"

const Sidebar = ({ menu }) => {

  const newMenu = (item) => {
    menu(item)
  }

    return(
        <div className="Sidebar">
          <BurgerBtn newMenu={newMenu}/>
        <div className="ellipse">
          <div className="language">
            Рус
          </div>
        </div>
      </div>
    );
};

export default Sidebar;