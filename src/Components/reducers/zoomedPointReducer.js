export default (point = {}, action) => {
    if(action.type === "SET_ZOOMEDPOINT"){
            return action.payload;
        }
    return point;
}