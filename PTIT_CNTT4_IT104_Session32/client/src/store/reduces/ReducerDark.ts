<<<<<<< HEAD
const initialState = {
    check : true
}
export const reducerDark = (state = initialState , action:any) => {
    switch (action.type) {
        case "DARK":
            return {...state , check : !state.check}
        default:
            return state
    }
=======
const initialState = {
    check : true
}
export const reducerDark = (state = initialState , action:any) => {
    switch (action.type) {
        case "DARK":
            return {...state , check : !state.check}
        default:
            return state
    }
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
}