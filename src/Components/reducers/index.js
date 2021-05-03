import { combineReducers } from "redux";
import changeLanguage from "./changeLanguage";


export default combineReducers({
    changeLanguage: changeLanguage,
})