export default (color = null, action) => {
    if(action.type === "SET_COLOR"){
            return action.payload;
        }
    return color;
}