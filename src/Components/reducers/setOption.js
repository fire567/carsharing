export default (option = localStorage.getItem('option'), action) => {
    if(action.type === "SET_EXTRA"){
            return action.payload;
        }
    return option;
}