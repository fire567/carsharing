export default (language = true, action) => {
    if(action.type === "SET_LANGUAGE"){
            return !action.payload;
        }
    return language;
}