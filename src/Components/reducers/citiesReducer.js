export default (cities = [], action) => {
    if(action.type === "FETCH_CITIES") {
        return action.payload;
    }

    return cities;
}