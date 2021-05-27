export default (point = [], action) => {
    if(action.type === "FETCH_POINTS") {
        return action.payload;
    }

    return point;
}