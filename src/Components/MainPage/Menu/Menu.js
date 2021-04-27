import React from "react";
import exit from "../../../accets/exit.svg";
import {connect} from "react-redux";
import {showMenu} from "../../actions/index";
import Links from "./Links/Links"
import "./Menu.css";


const Menu = (props) => {

    return(
        <div className={props.switchMenu === true ? "menu-active" : "menu"}>
            <div className="left-side-menu">
                <img src={exit} alt="exit-pic" className="exit-pic" onClick={() => props.showMenu(props.switchMenu)}></img>
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

const mapStateToProps = (state) => {
    return{
        switchMenu: state.switchMenu,
    }
}

export default connect(mapStateToProps, {
    showMenu: showMenu
})(Menu);