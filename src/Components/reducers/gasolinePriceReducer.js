export default (gasoline = 0, action) => {
    if(action.type === "SET_GASOLINE"){
            return action.payload;
        }
    return gasoline;
}
