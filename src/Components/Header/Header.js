import React from "react";
import "./Header.css";
import location from  "../../assets/location.svg";

const Header = () => {
    return(
        <div className="header-form">
            <div className="loc-logo">
                Need for drive
            </div>
            <div className="loc-form">
                <img src={location} className="loc-pic" alt="location"/>
                <div className="town">
                    Ульяновск
                </div>
            </div>
        </div>
    );
};

export default Header;