<<<<<<< HEAD
// reducer là những hàm
type Action={
    type:string,
    payload:any
}
const initialState={
    cart:[
        {
            id:1,
            title:"Cake",
            price: 10,
            quantity:3
        },
         {
            id:2,
            title:"Hamburger",
            price: 15,
            quantity:5
        }
    ],
    
}
export const reducerCart = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT": {
      const index = state.cart.findIndex(item => item.id == action.payload.id);
      if (index === -1) return state;
      const newState = JSON.parse(JSON.stringify(state));
      newState.cart[index].quantity += 1;
      return newState;
    }
    case "REDUCE": {
      const index = state.cart.findIndex(item => item.id == action.payload.id);
      if (index === -1) return state;
      const newState = JSON.parse(JSON.stringify(state));
      newState.cart[index].quantity = Math.max(0, newState.cart[index].quantity - 1);
      return newState;
    }
     case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
case "ADD": {
  const index = state.cart.findIndex(
    (item) => item.id === action.payload.id
  );
  if (index !== -1) {
    state.cart[index].quantity += 1;
  } else {
    state.cart.push({ ...action.payload, quantity: 1 });
  }
  return JSON.parse(JSON.stringify(state));
}

    default:
      return state;
  }
};
=======
// reducer là những hàm
type Action={
    type:string,
    payload:any
}
const initialState={
    cart:[
        {
            id:1,
            title:"Cake",
            price: 10,
            quantity:3
        },
         {
            id:2,
            title:"Hamburger",
            price: 15,
            quantity:5
        }
    ],
    
}
export const reducerCart = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT": {
      const index = state.cart.findIndex(item => item.id == action.payload.id);
      if (index === -1) return state;
      const newState = JSON.parse(JSON.stringify(state));
      newState.cart[index].quantity += 1;
      return newState;
    }
    case "REDUCE": {
      const index = state.cart.findIndex(item => item.id == action.payload.id);
      if (index === -1) return state;
      const newState = JSON.parse(JSON.stringify(state));
      newState.cart[index].quantity = Math.max(0, newState.cart[index].quantity - 1);
      return newState;
    }
     case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
case "ADD": {
  const index = state.cart.findIndex(
    (item) => item.id === action.payload.id
  );
  if (index !== -1) {
    state.cart[index].quantity += 1;
  } else {
    state.cart.push({ ...action.payload, quantity: 1 });
  }
  return JSON.parse(JSON.stringify(state));
}

    default:
      return state;
  }
};
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
