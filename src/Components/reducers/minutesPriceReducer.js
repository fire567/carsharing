export default (price = 0, action) => {
    if(action.type === "SET_MINUTESPRICE") {
        return action.payload;
    }

    return price;
}