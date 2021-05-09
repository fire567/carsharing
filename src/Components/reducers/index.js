import { combineReducers } from "redux";
import changeLanguage from "./changeLanguage";
import setTown from "./setTown";
import citiesReducer from "./citiesReducer";
import pointsReducer from "./pointsReducer";


export default combineReducers({
    changeLanguage: changeLanguage,
    setTown:setTown,
    citiesReducer:citiesReducer,
    points: pointsReducer
})