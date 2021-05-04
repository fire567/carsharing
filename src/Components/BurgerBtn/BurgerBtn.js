import React from "react";

const BurgerBtn = ({newMenu}) => {
  const showMenu = () => {
    newMenu(true);
  }

    return(
        <div className="menu-btn" onClick={() => showMenu()}>
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
      </div>
    );
};
  
  export default BurgerBtn;