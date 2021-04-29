import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import CarouselCars from "./Carousel/CarouselCars";
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
          <div className="carsharing-text">
            Каршеринг
          </div>
          <div className="big-logo">
            Need for drive
          </div>
          <div className="purpose">
            Поминутная аренда авто твоего города
          </div>
          <Link to="/carsharing/order-page">
            <div className="order-btn">
                Забронировать
            </div>
          </Link>
          
          <div className="footer">
            <div className="cop-mark">
              © 2016-2019 «Need for drive»
            </div>
            <div className="support-phone">
              8 (495) 234-22-44
            </div>
          </div>
        </div>
        <CarouselCars />
      </div>
    )
}

export default Content;