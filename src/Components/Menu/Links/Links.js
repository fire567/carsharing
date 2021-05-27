import React from "react";
import {ReactSVG} from "react-svg";
import "./Links.css";
import telegram from "../../../assets/telegram.svg";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";


const Links = () => {

    const links = [
        {id: 0, value:"ПАРКОВКА"},
        {id: 2, value:"СТРАХОВКА"},
        {id: 3, value:"БЕНЗИН"},
        {id: 4, value:"ОБСЛУЖИВАНИЕ"},
    ];

    const showLinks = links.map((link) => {
        return(
                <a className="link" key={link.id} >{link.value}</a> 
        );
    })

    return(
        <div className="links-form">
            {showLinks}
            <div className="social-link">  
                <a className="telegram-pic">
                    <ReactSVG src={telegram} className="telegram-pic" alt="telegram"/>
                </a>
                <a className="facebook-pic">
                    <ReactSVG src={facebook} className="facebook-pic" alt="facebook"/>
                </a>
                <a className="instagram-pic">
                    <ReactSVG src={instagram} className="instagram-pic" alt="instagram"/>
                </a>
            </div>
        </div>
    )
}

export default Links;