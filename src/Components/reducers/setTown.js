export default (town = localStorage.getItem('city'), action) => {
    if(action.type === "SET_TOWN"){
            return action.payload;
        }
    return town;
}