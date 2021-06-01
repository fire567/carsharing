
export default (option = 0, action) => {
    if(action.type === "SET_EXTRA"){
            return  action.payload
        }
    return option;
}