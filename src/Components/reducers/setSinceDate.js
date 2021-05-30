export default (date = null, action) => {
    if(action.type === "SET_SINCEDATE"){
            return action.payload;
        }
    return date;
}