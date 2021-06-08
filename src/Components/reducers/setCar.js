export default (car = [], action) => {
    if(action.type === "SET_CAR"){
        return action.payload;
    }

    return car;
}