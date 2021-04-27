export default (X = 0, action) => {
    if(action.type === "RIGHT_SLIDE"){
        if(action.payload >= -200){
            return action.payload - 100;
        }
        else if(X < -200){
            return 0
        }
    }else if(action.type === "LEFT_SLIDE"){
        if(action.payload < 0){
            return action.payload + 100;
        }
        else if(X >= 0){
            return -300
        }
    }else if(action.type === "RADIO_SLIDE"){
        return action.payload;
    }

    return X
}