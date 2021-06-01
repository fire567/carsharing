import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {setActiveLink} from "../actions/index";
import triangle from "../../assets/triangle.svg";
import "./OrderLinks.css";


const OrderLinks = ({ setLocInfo, setCar, activeExtra, setActiveLink, activeLink }) => {
    
    const links = [
        {id: 0, value: "Местоположение", link: "/order-page/loc"},
        {id: 1, value: "Модель", link: "/order-page/model"},
        {id: 2, value: "Дополнительно", link: "/order-page/extraopt"},
        {id: 3, value: "Итого"},
    ];

    useEffect(() => {
        
        if(setLocInfo.length > 0 && setCar.length === 0){
            setActiveLink(1)
        }
        else if(setCar.length !== 0 && activeExtra === 0){
            setActiveLink(2)
        }
        if(activeExtra > 0){
            setActiveLink(3)
        }
        
    }, [setLocInfo.length, setCar.length, activeExtra])

    const showLinks = () => {
    
        return links.map((link) => {
            if(link.id <= activeLink){
                return(
                    <div className="order-links" key={link.id}>
                        <Link to={link.link}>
                            <button 
                                className={link.link === window.location.hash.split('carsharing')[1]  ? "order-link-active" : "order-link-avalible"} 
                                >
                                {link.value}
                            </button>
                        </Link>
                        <div className={link.id === links.length - 1 ? "triangle-hidden" : "triangle"}>
                            <img className="triangle-pic" src={triangle} />
                        </div>
                    </div>
                )
            }return (
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
        activeExtra: state.activeExtra,
        activeLink: state.activeLink,
    }
}

export default connect(mapStateToProps,{
    setActiveLink: setActiveLink
})(OrderLinks);