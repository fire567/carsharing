export default (id = "", action) => {
    if(action.type === "SET_IDLINK") {
        return action.payload;
    }

    return id;
}