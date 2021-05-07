import React, { useState } from "react";
import triangle from "../../assets/triangle.svg";
import "./OrderLinks.css";


const OrderLinks = () => {
    const [activeLink, setActiveLink ] = useState(0)
    const links = [
        {id: 0, value: "Местоположение"},
        {id: 1, value: "Модель"},
        {id: 2, value: "Дополнительно"},
        {id: 3, value: "Итого"},
    ];

    const activeItem = (id) => {
        setActiveLink(id)
    }

    const showLinks = () => {
        return links.map((link) => {
            return(
                <div className="order-links" key={link.id}>
                    <a 
                        className={link.id === activeLink ? "order-link-active" : "order-link"} 
                        onClick={() => activeItem(link.id)}
                        >
                        {link.value}
                    </a>
                    <div className={link.id === links.length - 1 ? "triangle-hidden" : "triangle"}>
                        <img className="triangle-pic" src={triangle} />
                    </div>
                </div>
            )
        })
        
    }

    return (
        <div className="order-links-form">
            {showLinks()}
        </div>
    )
}

export default OrderLinks;