export default (info = [], action) => {
    if(action.type === "SET_LOCINFO"){
            return action.payload;
        }
    return info;
}
