export default (car = JSON.parse(localStorage.getItem('car')), action) => {
    if(action.type === "SET_CAR"){
        return action.payload;
    }

    return car;
}