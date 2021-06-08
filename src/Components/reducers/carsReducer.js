export default (cars = 0, action) => {
    if(action.type === "FETCH_CARS") {
        return action.payload;
    }

    return cars;
}