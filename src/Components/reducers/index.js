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
import setColor from "./setColor";
import setSinceDate from "./setSinceDate";
import setEndDate from "./setEndDate";
import setTariff from "./setTariff";
import setOption from "./setOption";
import setHours from "./setHours";
import daysReducer from "./daysReducer";
import tariffPriceReducer from "./tariffPriceReducer";
import daysPriceReducer from "./daysPriceReducer";
import minutesPriceReducer from "./minutesPriceReducer";
import totalReducer from "./totalReducer";
import diffReducer from "./diffReducer";
import gasolinePriceRedicer from "./gasolinePriceReducer";
import childChairPrice from "./childChairPrice";
import extraOptPrice from "./extraOptPrice";
import activeExtraReducer from "./activeExtraReducer";
import activeLinkReducer from "./activeLinkReducer";
import mapReducer from "./mapReducer";
import addressesList from "./addressesList";
import zoomedPointReducer from "./zoomedPointReducer";
import switchFinish from "./switchFinish"; 


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
    setColor: setColor,
    setSinceDate: setSinceDate,
    setEndDate: setEndDate,
    setTariff: setTariff,
    setOption: setOption,
    hours: setHours,
    days: daysReducer,
    tariffPrice: tariffPriceReducer,
    daysPrice: daysPriceReducer,
    minutesPrice: minutesPriceReducer,
    totalPrice: totalReducer,
    diff: diffReducer,
    gasolinePrice: gasolinePriceRedicer,
    chair: childChairPrice,
    extraOptPrice: extraOptPrice,
    activeExtra: activeExtraReducer,
    activeLink: activeLinkReducer,
    mapReducer: mapReducer,
    addressesList: addressesList,
    zoomedPointReducer: zoomedPointReducer,
    switchFinish: switchFinish,
})