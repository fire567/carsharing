export default (link = 0, action) => {
    if(action.type === "SET_ACTIVELINK") {
        return action.payload;
    }

    return link;
}