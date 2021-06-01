export default (active = 0, action) => {
    if(action.type === "SET_EXTRAOPT") {
        return action.payload;
    }

    return active;
}