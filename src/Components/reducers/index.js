import { combineReducers } from "redux";
import changeLanguage from "./changeLanguage";
import setTown from "./setTown";


export default combineReducers({
    changeLanguage: changeLanguage,
    setTown:setTown,
})