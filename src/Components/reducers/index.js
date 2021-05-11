import { combineReducers } from "redux";
import changeLanguage from "./changeLanguage";
import setTown from "./setTown";
import citiesReducer from "./citiesReducer";
import pointsReducer from "./pointsReducer";
import setAdress from "./setAdress";


export default combineReducers({
    changeLanguage: changeLanguage,
    setTown:setTown,
    setAdress: setAdress,
    citiesReducer:citiesReducer,
    points: pointsReducer,
})