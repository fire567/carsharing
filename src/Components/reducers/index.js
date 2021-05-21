import { combineReducers } from "redux";
import changeLanguage from "./changeLanguage";
import setTown from "./setTown";
import carsReducer from "./carsReducer";
import citiesReducer from "./citiesReducer";
import pointsReducer from "./pointsReducer";
import setAdress from "./setAdress";
import setLocInfo from "./setLocInfo";
import setCategory from "./setCategory";
import setCar from "./setCar";
import cartReducer from "./cartReducer";


export default combineReducers({
    changeLanguage: changeLanguage,
    setTown:setTown,
    setAdress: setAdress,
    citiesReducer:citiesReducer,
    points: pointsReducer,
    setLocInfo: setLocInfo,
    cars: carsReducer, 
    category: setCategory,
    setCar: setCar,
    cartReducer: cartReducer,
})