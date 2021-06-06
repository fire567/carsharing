export default (order = [], action) => {
    if(action.type === "POST_ORDER"){
            return action.payload;
        }
    return order;
}
