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