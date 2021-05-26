export default (adress = "", action) => {
    if(action.type === "SET_ADRESS"){
            return action.payload;
        }
    return adress;
}
