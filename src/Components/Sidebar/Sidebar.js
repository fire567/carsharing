import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
    return(
        <div className="Sidebar">
        <div className="menu-btn">
          <div className="vector"></div>
          <div className="vector"></div>
          <div className="vector"></div>
        </div>
        <div className="ellipse">
          <div className="language">
            Eng
          </div>
        </div>
      </div>
    );
};

export default Sidebar;