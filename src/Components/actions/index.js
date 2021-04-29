export const rightSlide = (move) => {
    return{
        type: "RIGHT_SLIDE",
        payload: move,
    }
}

export const  leftSlide = (move) => {
    return{
        type: "LEFT_SLIDE",
        payload: move,
    }
}

export const radioSlide = (move) => {
    return{
        type: "RADIO_SLIDE",
        payload: move,
    }
}

export const showMenu = (position) => {
    return{
        type: "SWITCH_MENU",
        payload: position,
    }
}