<<<<<<< HEAD
const initialState = {
    say  : "rikkei academy"
}
export const changeState: any = (state = initialState , action:any) => {
    switch (action.type) {
        case "SAY":
            return {...state , say : "rikkei soft"};
        default:
            return state;
    }
=======
const initialState = {
    say  : "rikkei academy"
}
export const changeState: any = (state = initialState , action:any) => {
    switch (action.type) {
        case "SAY":
            return {...state , say : "rikkei soft"};
        default:
            return state;
    }
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
}