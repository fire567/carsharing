import { combineReducers } from "redux";
import SwitchSlide from "./SwitchSlideReducer";
import switchMenu from "./SwitchMenu";
import SlideArr from "./SlideArr";
import radioArr from "./radioArr";
import links from "./links";


export default combineReducers({
    links: links,
    Sliders: SlideArr,
    radio: radioArr,
    SwitchSlide: SwitchSlide,
    switchMenu: switchMenu
})