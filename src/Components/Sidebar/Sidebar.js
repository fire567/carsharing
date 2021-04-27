import React from "react";
import {connect} from "react-redux";
import {showMenu} from "../actions/"
import "./Sidebar.css"

const Sidebar = (props) => {
    return(
        <div className="Sidebar">
        <div className="menu-btn" onClick={() => props.showMenu(props.switchMenu)}>
          <div className="vector"></div>
          <div className="vector"></div>
          <div className="vector"></div>
        </div>
        <div className="ellipse">
          <div className="language">
            Рус
          </div>
        </div>
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
})(Sidebar);