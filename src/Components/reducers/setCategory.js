export default (category = null, action) => {
    if(action.type === "SET_CATEGORY"){
            return action.payload;
        }
    return category;
}