export default (town = "", action) => {
    if(action.type === "SET_TOWN"){
            return action.payload;
        }
    return town;
}