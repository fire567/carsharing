export default (hours = null, action) => {
    if(action.type === "SET_HOURS"){
            return action.payload;
        }
    return hours;
}
