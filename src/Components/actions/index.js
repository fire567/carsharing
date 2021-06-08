import API from "../../apis/API";

export const setLanguage = (language) => {
    return{
        type: "SET_LANGUAGE",
        payload: language,
    }
}

export const fetchCities = () => {
    return async (dispatch) => {
        const response = await API.get(`city/`);

        dispatch({
            type: 'FETCH_CITIES',
            payload: response.data,
        })
    }
}

export const fetchPoints = () => {
    return async (dispatch) => {
        const response = await API.get(`point/`);

        dispatch({
            type: 'FETCH_POINTS',
            payload: response.data,
        })
    }
}

export const fetchCars = () => {
    return async (dispatch) => {
        const response = await API.get(`car/`);

        dispatch({
            type: 'FETCH_CARS',
            payload: response.data,
        })
    }
}

export const changeTown = (town) => {
    return{
        type: "SET_TOWN",
        payload: town,
    }
}

export const changeAdress = (adress) => {
    return{
        type: "SET_ADRESS",
        payload: adress,
    }
}

export const locInfo = (info) => {
    return{
        type: "SET_LOCINFO",
        payload: info,
    }
}

export const changeCategory = (category) => {
    return{
        type: "SET_CATEGORY",
        payload: category,
    }
}

export const chooseCar = (car) => {
    return{
        type: "SET_CAR",
        payload: car,
    }
}

export const showCart = (active) => {
    return{
        type: "SHOW_CART",
        payload: active,
    }
}

export const chooseColor = (color) => {
    return{
        type: "SET_COLOR",
        payload: color,
    }
}

export const chooseSinceDate = (date) => {
    return{
        type: "SET_SINCEDATE",
        payload: date,
    }
}

export const chooseEndDate = (date) => {
    return{
        type: "SET_ENDDATE",
        payload: date,
    }
}

export const chooseTariff = (tariff) => {
    return{
        type: "SET_TARIFF",
        payload: tariff,
    }
} 

export const chooseExtra = (option) => {
    return{
        type: "SET_EXTRA",
        payload: option,
    }
} 

export const setHours = (hours) => {
    return{
        type: "SET_HOURS",
        payload: hours,
    }
} 

export const setDays = (days) => {
    return{
        type: "SET_DAYS",
        payload: days,
    }
} 

export const setTariffPrice = (price) => {
    return{
        type: "SET_TARIFFPRICE",
        payload: price,
    }
} 

export const setMinutesPrice = (price) => {
    return{
        type: "SET_MINUTESPRICE",
        payload: price,
    }
} 

export const setDaysPrice = (price) => {
    return{
        type: "SET_DAYSPRICE",
        payload: price,
    }
} 

export const setTotalPrice = (price) => {
    return{
        type: "SET_TOTALPRICE",
        payload: price,
    }
} 

export const setDiff = (diff) => {
    return{
        type: "SET_DIFF",
        payload: diff,
    }
} 

export const setGasolinePrice = (price) => {
    return{
        type: "SET_GASOLINE",
        payload: price,
    }
}

export const setChildChairPrice = (price) => {
    return{
        type: "SET_CHAIR",
        payload: price,
    }
}

export const setExtraOptPrice = (price) => {
    return{
        type: "SET_EXSTRAOPT",
        payload: price,
    }
}

export const setActiveExtraBTN = (active) => {
    return{
        type: "SET_ACTIVEEXTRA",
        payload: active,
    }
}

export const setActiveLink = (link) => {
    return{
        type: "SET_ACTIVELINK",
        payload: link,
    }
}

export const setMapResult = (result) => {
    return{
        type: "SET_MAPRESULT",
        payload: result,
    }
}

export const setAddressesList = (addresses) => {
    return{
        type: "SET_ADRESSESLIST",
        payload: addresses,
    }
}

export const removeAddressesList = (addresses) => {
    return{
        type: "SET_REMOVEADRESSESLIST",
        payload: addresses,
    }
}

export const zoomedPoint = (point) => {
    return{
        type: "SET_ZOOMEDPOINT",
        payload: point,
    }
}

export const switchFinishMenu = (active) => {
    return{
        type: "SWITCH_FINISHMENU",
        payload: active,
    }
}

export const postOrder = () => {
    return async (dispatch) => {
        const response = await API.get(`order/60bd13de2aed9a0b9b82fd63`);

        dispatch({
            type: 'POST_ORDER',
            payload: response.data,
        })
    }
}

export const setActiveGas = (gas) => {
    return{
        type: "SET_ACTIVEGAS",
        payload: gas,
    }
}

export const setActiveChair = (chair) => {
    return{
        type: "SET_ACTIVECHAIR",
        payload: chair,
    }
}

export const setRightHandActive = (hand) => {
    return{
        type: "SET_ACTIVERIGHTHAND",
        payload: hand,
    }
}

export const setRightHandPrice = (price) => {
    return{
        type: "SET_RIGHTHAND",
        payload: price,
    }
}