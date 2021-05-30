export default (date = null, action) => {
    if(action.type === "SET_ENDDATE"){
            return action.payload;
        }
    return date;
}