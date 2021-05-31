export default (price = 0, action) => {
    if(action.type === "SET_TARIFFPRICE"){
            return action.payload;
        }
    return price;
}