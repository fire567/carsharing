let initialState = {
    confirmData: [],
};

export default (order = initialState, action) => {
    if(action.type === "POST_ORDER"){
            return action.payload;
        }
    return order;
}
