export default (active = false, action) => {
    if(action.type === "SET_ACTIVEGAS") {
        return action.payload;
    }

    return active;
}