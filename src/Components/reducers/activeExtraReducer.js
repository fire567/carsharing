export default (active = 0, action) => {
    if(action.type === "SET_ACTIVEEXTRA") {
        return action.payload;
    }

    return active;
}