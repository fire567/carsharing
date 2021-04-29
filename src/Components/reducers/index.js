import { combineReducers } from "redux";
import switchSlide from "./switchSlideReducer";
import switchMenu from "./switchMenu";
import slideArr from "./slideArr";
import radioArr from "./radioArr";
import links from "./links";


export default combineReducers({
    links: links,
    sliders: slideArr,
    radio: radioArr,
    switchSlide: switchSlide,
    switchMenu: switchMenu
})