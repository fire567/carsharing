export default (order = {}, action) => {
    if(action.type === "GET_ORDER"){
            return action.payload;
        }
    return order;
}