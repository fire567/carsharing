export default (active = true, action) => {
    if(action.type === "SET_ACTIVERIGHTHAND") {
        return action.payload;
    }

    return active;
}