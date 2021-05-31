export default (diff = 0, action) => {
    if(action.type === "SET_DIFF"){
            return action.payload;
        }
    return diff;
}
