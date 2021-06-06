export default (town = false, action) => {
    if(action.type === "SWITCH_FINISHMENU"){
            return action.payload;
        }
    return town;
}