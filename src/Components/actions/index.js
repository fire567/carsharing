export const RightSlide = (X) => {
    return{
        type: "RIGHT_SLIDE",
        payload: X,
    }
}

export const  LeftSlide = (X) => {
    return{
        type: "LEFT_SLIDE",
        payload: X,
    }
}

export const radioSlide = (X) => {
    return{
        type: "RADIO_SLIDE",
        payload: X,
    }
}