import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";
import Slides from "./Slides/Slides";




const CarouselCars = () => {
  const [ position, setPosition] = useState(0);

  const rightSlide = () => {
    if(position >= -200){
        setPosition(position - 100);
    }
    else if(position < -200){
        setPosition(0);
    }
  }

  const leftSlide = () => {
    if(position < 0){
        setPosition(position + 100);
    }
    else if(position >= 0){
      setPosition(position - 300);
    }
  }

  const radioSlide = (pos) => {
    setPosition(pos)
  }

  const radio = [
    { id:0, pos:0 },
    { id:1, pos:-100 },
    { id:2, pos:-200 },
    { id:3, pos:-300 }
    ];

    return( 
      <div className="right-side" >
        <Slides position={position}/>
        <div className="test">
              {radio.map((item) => (
                <div className={item.pos === position ? "radio-active" : "radio"} onClick={() => radioSlide(item.pos)} key={item.id}>
                </div>
              ))}
            </div>
        <div className={"left-block"} onClick={() => leftSlide()}> 
            <div className={"left-arrow"}></div>
          </div>
          <div className={"right-block"} onClick={() => rightSlide()}>
            <div className={"right-arrow"}></div>
          </div>
          
      </div>

    );
};

export default CarouselCars;