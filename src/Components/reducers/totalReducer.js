export default (price = 0, action) => {
    if(action.type === "SET_TOTALPRICE"){
            return action.payload;
        }
    return price;
}