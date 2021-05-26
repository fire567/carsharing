export default (date = Date.parse(localStorage.getItem('sinceDate')), action) => {
    if(action.type === "SET_SINCEDATE"){
            return action.payload;
        }
    return date;
}