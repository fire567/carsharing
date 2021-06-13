export default (rate = [], action) => {
    if(action.type === "SET_RATE"){
            return action.payload;
        }
    return rate;
}