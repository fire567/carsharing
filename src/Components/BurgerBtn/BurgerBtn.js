import React from "react";
import {connect} from "react-redux";
import {showMenu} from "../actions/";

const BurgerBtn = ({switchMenu, showMenu}) => {
    return(
        <div className="menu-btn" onClick={() => showMenu(switchMenu)}>
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
      </div>
    );
};

const mapStateToProps = (state) => {
    return{
      switchMenu: state.switchMenu
    }
  }
  
  export default connect(mapStateToProps, {
    showMenu: showMenu
  })(BurgerBtn);