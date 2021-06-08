export default (price = 0, action) => {
    if(action.type === "SET_RIGHTHAND"){
            return action.payload;
        }
    return price;
}
