export default (chair = 0, action) => {
    if(action.type === "SET_CHAIR") {
        return action.payload;
    }

    return chair;
}