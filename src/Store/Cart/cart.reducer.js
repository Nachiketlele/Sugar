// let cartData = localStorage.getItem("cartItem") || [];

export const cartReducer = (cart = [], action) => {
  console.log(cart);
  switch (action.type) {
    case "ADD_TO_CART": {
      // localStorage.setItem("cartItem", cart);
      let tempCart = cart.filter((item) => item.id === action.payload.id);
      if (tempCart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }
    }
    case "REMOVE": {
      return cart.filter((item) => item.id !== action.payload.id);
    }
    case "INCREASE": {
      let tempCart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return tempCart;
    }
    case "DECREASE": {
      let tempCart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return tempCart;
    }
    default:
      return cart;
  }
};
