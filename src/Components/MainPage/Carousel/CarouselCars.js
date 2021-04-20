import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";
import { connect } from "react-redux";
import { RightSlide, LeftSlide, radioSlide} from "../../actions"
import SlideList from "./Slides/Slides";




const CarouselCars = (props) => {
  

    return( 
      <div className="right-side">
        <div className={"left-block"} onClick={() => props.LeftSlide(props.SwitchSlide)}> 
            <div className={"left-arrow"}></div>
          </div>
          <div className="centre-block">
            <div className="test">
              {props.radio.map((item) => (
                <div className={item.X === props.SwitchSlide ? "radio-active" : "radio"} onClick={() => props.radioSlide(item.X)} key={item.id}></div>
              ))}
            </div>
          </div>
          <div className={"right-block"} onClick={() => props.RightSlide(props.SwitchSlide)}>
            <div className={"right-arrow"}></div>
          </div>
          <SlideList />
      </div>

    );
};

const mapStateToProps = (state) => {
  console.log(state.SwitchSlide)
  return{
    radio: state.radio,
    SwitchSlide: state.SwitchSlide
  }
}

export default connect(mapStateToProps, {
  RightSlide: RightSlide,
  LeftSlide: LeftSlide,
  radioSlide: radioSlide
})(CarouselCars);