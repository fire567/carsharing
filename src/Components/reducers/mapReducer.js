const initialState = [];

export default (map = initialState, action) => {
    if(action.type === "SET_MAPRESULT") {
        return [...map, action.payload];
    }else if(action.type === "SET_REMOVEADRESSESLIST"){
        return []
    }

    return map;
}