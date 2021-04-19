import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";
import Car1 from "../../../accets/car1.svg";



const CarouselCars = () => {
    return( 
      
      <div className="right-side">
        <div className="carousel-inner" style={{backgroundImage: `url(${Car1})`}}>
          <div className="left-block"> 
            <div className="left-arrow"></div>
          </div>
          <div className="centre-block">
          </div>
          <div className="right-block">
            <div className="right-arrow"></div>
          </div>
        </div>
      </div>
      

    );
};

export default CarouselCars;