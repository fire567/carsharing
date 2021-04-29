import React from "react";
import { connect } from "react-redux";
import {ReactSVG} from "react-svg";
import "./Links.css";
import telegram from "../../../../assets/telegram.svg";
import instagram from "../../../../assets/instagram.svg";
import facebook from "../../../../assets/facebook.svg";


const Links = ({links}) => {

    const showLinks = links.map((link) => {
        return(
                <div className="link" key={link.id} >{link.value}</div> 
        );
    })

    return(
        <div className="links-form">
            {showLinks}
            <div className="social-link">  
                <div className="telegram-pic">
                    <ReactSVG src={telegram} className="telegram-pic" alt="telegram"/>
                </div>
                <div className="facebook-pic">
                    <ReactSVG src={facebook} className="facebook-pic" alt="facebook"/>
                </div>
                <div className="instagram-pic">
                    <ReactSVG src={instagram} className="instagram-pic" alt="instagram"/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        links: state.links,
    }
}

export default connect(mapStateToProps)(Links);