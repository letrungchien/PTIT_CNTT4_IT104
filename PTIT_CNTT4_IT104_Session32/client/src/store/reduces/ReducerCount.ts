<<<<<<< HEAD
// mục đích của hàm để tính toán trả về state mới dựa vào action
const  initialState = {
    count :0
}
export const reducerCounter : any = (state= initialState , action:any)=>{
    switch (action.type) {
        case "INCREMENT":
              state.count = state.count + 1;
            return {...state}
           
            break;
            case "REDUCE":
                state.count = state.count - 1;
            return {...state}
            break;
        default:
            return state
    }
=======
// mục đích của hàm để tính toán trả về state mới dựa vào action
const  initialState = {
    count :0
}
export const reducerCounter : any = (state= initialState , action:any)=>{
    switch (action.type) {
        case "INCREMENT":
              state.count = state.count + 1;
            return {...state}
           
            break;
            case "REDUCE":
                state.count = state.count - 1;
            return {...state}
            break;
        default:
            return state
    }
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
}