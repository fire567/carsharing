export default (active = true, action) => {
    if(action.type === "SET_ACTIVEGAS") {
        return action.payload;
    }

    return active;
}