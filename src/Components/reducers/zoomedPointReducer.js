export default (point = {lat: 54.32824, lng: 48.38657}, action) => {
    if(action.type === "SET_ZOOMEDPOINT"){
            return action.payload;
        }
    return point;
}