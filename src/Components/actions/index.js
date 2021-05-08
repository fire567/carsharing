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
            payload: response.data
        })
    }
}

export const changeTown = (town) => {
    return{
        type: "SET_TOWN",
        payload: town,
    }
}