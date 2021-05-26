export default (date = Date.parse(localStorage.getItem('endDate')), action) => {
    if(action.type === "SET_ENDDATE"){
            return action.payload;
        }
    return date;
}