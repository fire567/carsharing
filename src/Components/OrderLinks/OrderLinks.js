import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import triangle from "../../assets/triangle.svg";
import "./OrderLinks.css";


const OrderLinks = ({ setLocInfo, activeLink, setCar }) => {
    const links = [
        {id: 0, value: "Местоположение", link: "/carsharing/order-page/loc"},
        {id: 1, value: "Модель", link: "/carsharing/order-page/model"},
        {id: 2, value: "Дополнительно", link: "/carsharing/order-page/extraopt"},
        {id: 3, value: "Итого"},
    ];

    const showLinks = () => {
        return links.map((link) => {
            if( setLocInfo.length === 1 && setCar != 0){
                if(link.id === 0 || link.id === 1 || link.id === 2){
                return(
                    <div className="order-links" key={link.id}>
                        <Link to={link.link}>
                            <button 
                                className={link.id === activeLink  ? "order-link-active" : "order-link-avalible"} 
                                >
                                {link.value}
                            </button>
                        </Link>
                        <div className={link.id === links.length - 1 ? "triangle-hidden" : "triangle"}>
                            <img className="triangle-pic" src={triangle} />
                        </div>
                    </div>
                )
                }
            }
            else if( setLocInfo.length === 1){
                if(link.id === 0 || link.id === 1){
                return(
                    <div className="order-links" key={link.id}>
                        <Link to={link.link}>
                            <button 
                                className={link.id === activeLink  ? "order-link-active" : "order-link-avalible"} 
                                >
                                {link.value}
                            </button>
                        </Link>
                        <div className={link.id === links.length - 1 ? "triangle-hidden" : "triangle"}>
                            <img className="triangle-pic" src={triangle} />
                        </div>
                    </div>
                )
                }
            }
            return (
                <div className="order-links" key={link.id}>
                    {link.id === 0 ? 
                        <button 
                            className={"order-link-active"} 
                            >
                            {link.value}
                        </button> : 
                        <button 
                            disabled={"disabled"}
                            className={"order-link"} 
                            >
                            {link.value}
                        </button>
                    }
                        <div className={link.id === links.length - 1 ? "triangle-hidden" : "triangle"}>
                            <img className="triangle-pic" src={triangle} />
                        </div>
                    </div>
            )
            }
        )
        
    }

    return (
        <div className="order-links-form">
            {showLinks()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        setTown: state.setTown,
        setAdress: state.setAdress,
        points: state.points,
        setLocInfo: state.setLocInfo,
        setCar: state.setCar,
    }
}

export default connect(mapStateToProps)(OrderLinks);