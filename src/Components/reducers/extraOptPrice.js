export default (price = 0, action) => {
    if(action.type === "SET_EXSTRAOPT"){
            return action.payload;
        }
    return price;
}
