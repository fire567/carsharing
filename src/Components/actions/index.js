

export const showMenu = (position) => {
    return{
        type: "SWITCH_MENU",
        payload: position,
    }
}