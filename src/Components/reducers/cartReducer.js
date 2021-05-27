export default (cart = false, action) => {
    if(action.type === "SHOW_CART"){
            return action.payload;
        }
    return cart;
}