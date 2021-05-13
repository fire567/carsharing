import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";
import CarouselCars from "../../Components/Carousel/CarouselCars";
import Button from "../../Components/Button/Button";
import location from "../../assets/location.svg";

const Content = () => {
    return(
        <div className="content">
        <div className="left-side">
          <div className="header">
            <div className="logo">
              Need for drive
            </div>
            <div className="location">
              <img src={location} className="loc-pic" alt="location"/>
              <div className="town">
                  Ульяновск
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="carsharing-text">
              Каршеринг
            </div>
            <div className="big-logo">
              Need for drive
            </div>
            <div className="purpose">
              Поминутная аренда авто твоего города
            </div>
            <div className="btn-form">
            <Link to="/carsharing/order-page">
              <Button text={"Забронировать"} width={"100%"} activeBTN={"order-btn"} disabled={""}/>
            </Link>
            </div>
          </div>
          <div className="footer">
            <div className="cop-mark">
              © 2016-2019 «Need for drive»
            </div>
            <a className="support-phone">
              8 (495) 234-22-44
            </a>
          </div>
        </div>
        <CarouselCars />
      </div>
    )
}

export default Content;