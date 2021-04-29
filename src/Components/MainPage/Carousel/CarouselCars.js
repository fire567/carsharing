import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";
import { connect } from "react-redux";
import { rightSlide, leftSlide, radioSlide} from "../../actions"
import Slides from "./Slides/Slides";




const CarouselCars = ({radio, switchSlide, rightSlide, leftSlide, radioSlide}) => {
    return( 
      <div className="right-side" >
        <Slides />
        <div className="test">
              {radio.map((item) => (
                <div className={item.X === switchSlide ? "radio-active" : "radio"} onClick={() => radioSlide(item.X)} key={item.id}>
                </div>
              ))}
            </div>
        <div className={"left-block"} onClick={() => leftSlide(switchSlide)}> 
            <div className={"left-arrow"}></div>
          </div>
          <div className={"right-block"} onClick={() => rightSlide(switchSlide)}>
            <div className={"right-arrow"}></div>
          </div>
          
      </div>

    );
};

const mapStateToProps = (state) => {
  return{
    radio: state.radio,
    switchSlide: state.switchSlide
  }
}

export default connect(mapStateToProps, {
  rightSlide: rightSlide,
  leftSlide: leftSlide,
  radioSlide: radioSlide
})(CarouselCars);