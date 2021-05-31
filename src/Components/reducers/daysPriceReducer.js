export default (price = 0, action) => {
    if(action.type === "SET_DAYSPRICE") {
        return action.payload;
    }

    return price;
}