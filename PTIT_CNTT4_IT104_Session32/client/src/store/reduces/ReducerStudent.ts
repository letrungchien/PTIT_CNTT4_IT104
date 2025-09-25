<<<<<<< HEAD
const initialState={
    users:[
        {
            id:1,
            userName:"chien",
            gender:"nam",
            dateBirth:"10/10/2010",
            address:"Thanh Hoa"
        },
         {
            
            id:2,
            userName:"chien",
            gender:"nam",
            dateBirth:"10/10/2010",
            address:"Thanh Hoa"
        }
        ,
         {
            
            id:3,
            userName:"chien",
            gender:"nam",
            dateBirth:"10/10/2010",
            address:"Thanh Hoa"
        }
    ]
}

export const reducerStudent=(state=initialState,action:any)=>{
    switch (action.type) {
        case "ADD":
            return state;
            break;
      case "EDIT":
              return state;
            break;
              case "DELETE":
              return state;
            break;
        default:
              return state;
            break;
    }
=======
const initialState={
    users:[
        {
            id:1,
            userName:"chien",
            gender:"nam",
            dateBirth:"10/10/2010",
            address:"Thanh Hoa"
        },
         {
            
            id:2,
            userName:"chien",
            gender:"nam",
            dateBirth:"10/10/2010",
            address:"Thanh Hoa"
        }
        ,
         {
            
            id:3,
            userName:"chien",
            gender:"nam",
            dateBirth:"10/10/2010",
            address:"Thanh Hoa"
        }
    ]
}

export const reducerStudent=(state=initialState,action:any)=>{
    switch (action.type) {
        case "ADD":
            return state;
            break;
      case "EDIT":
              return state;
            break;
              case "DELETE":
              return state;
            break;
        default:
              return state;
            break;
    }
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
}