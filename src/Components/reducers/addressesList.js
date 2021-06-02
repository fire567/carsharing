export default (list = [], action) => {
    if(action.type === "SET_ADRESSESLIST") {
        return action.payload;
    }

    return list;
}