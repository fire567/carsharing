export default (adress = localStorage.getItem('address'), action) => {
    if(action.type === "SET_ADRESS"){
            return action.payload;
        }
    return adress;
}
