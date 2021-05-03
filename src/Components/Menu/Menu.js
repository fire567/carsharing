import React from "react";
import exit from "../../assets/exit.svg";
import Links from "./Links/Links"
import "./Menu.css";


const Menu = ({menuChange, switchMenu}) => {
    const showMenu = () => {
        menuChange(false);
    }

    return(
        <div className={switchMenu === true ? "menu-active" : "menu"}>
            <div className="left-side-menu">
                <img src={exit} alt="exit-pic" className="exit-pic" onClick={() => showMenu()}></img>
                <Links />
                <div className="language-in-menu">
                    Рус
                </div>
            </div>
            <div className="right-side-menu">
            </div>
        </div>
    );
};


export default Menu;