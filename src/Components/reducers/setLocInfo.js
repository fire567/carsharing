export default (info = JSON.parse(localStorage.getItem('locInf')), action) => {
    if(action.type === "SET_LOCINFO"){
            return action.payload;
        }
    return info;
}
