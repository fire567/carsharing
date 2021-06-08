export default (cars = [], action) => {
    if(action.type === "FETCH_CARS") {
        return action.payload;
    }

    return cars;
}