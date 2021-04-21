import React from "react";
import { connect } from "react-redux";
import "./Slides.css";



const Slides = (props) => {

    const SlideList = props.sliders.map((item) => {
        return(
          <div 
            className="carousel-inner" 
            key={item.id} 
            style={{backgroundImage: `url(${item.url})`, transform: `translateX(${props.SwitchSlide}%)`}}>
              <div className="dark-slide"></div>
              <div className="heading">
                {item.heading}
              </div>
              <div className="text">
                {item.text}
              </div>
              <div className="button" onClick={() => alert("asd")} style={{background: `linear-gradient(${item.style})`, cursor: "pointer"}}>
                Подробнее
              </div>
              
          </div>
        )
      })

    return (
        SlideList
    );
};


const mapStateToProps = (state) => {
    return {
        sliders: state.Sliders,
        SwitchSlide: state.SwitchSlide
    }
}

export default connect(mapStateToProps)(Slides)