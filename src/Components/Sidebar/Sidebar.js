import React from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import "./Sidebar.css"

const Sidebar = () => {
    return(
        <div className="Sidebar">
          <BurgerBtn />
        <div className="ellipse">
          <div className="language">
            Рус
          </div>
        </div>
      </div>
    );
};

export default Sidebar;