export default (position = false, action) => {
    if(action.type === "SWITCH_MENU"){
            return !action.payload;
        }
    return position;
}