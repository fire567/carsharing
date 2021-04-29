import React from "react";
import { connect } from "react-redux";
import "./Slides.css";



const Slides = ({sliders, switchSlide}) => {
    return sliders.map((item) => {
    return (
      <div 
      className="carousel-inner" 
      key={item.id} 
      style={{backgroundImage: `url(${item.url})`, transform: `translateX(${switchSlide}%)`}}>
        <div className="dark-slide"></div>
        <div className="heading">
          {item.heading}
        </div>
        <div className="text">
          {item.text}
        </div>
        <div className="button" style={{background: `linear-gradient(${item.style})`, cursor: "pointer"}}>
          Подробнее
        </div>
        
    </div>
    );
    })
};


const mapStateToProps = (state) => {
    return {
        sliders: state.sliders,
        switchSlide: state.switchSlide
    }
}

export default connect(mapStateToProps)(Slides)