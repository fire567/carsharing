export default (days = null, action) => {
    if(action.type === "SET_DAYS"){
            return action.payload;
        }
    return days;
}
