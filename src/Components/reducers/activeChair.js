export default (active = false, action) => {
    if(action.type === "SET_ACTIVECHAIR") {
        return action.payload;
    }

    return active;
}