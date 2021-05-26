export default (tariff = localStorage.getItem('tariff'), action) => {
    if(action.type === "SET_TARIFF"){
            return action.payload;
        }
    return tariff;
}