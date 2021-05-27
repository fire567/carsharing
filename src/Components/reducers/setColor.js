export default (color = JSON.parse(localStorage.getItem('color')), action) => {
    if(action.type === "SET_COLOR"){
            return action.payload;
        }
    return color;
}