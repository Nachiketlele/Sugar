let cartData = JSON.parse(localStorage.getItem("cartItem")) || [];

export const cartReducer = (cart = cartData, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "ADD_TO_CART": {
      if (cartData === []) {
        return;
      } else localStorage.setItem("cartItem", JSON.stringify(cart));

      let tempCart = cart.filter((item) => item.id === action.payload.id);
      if (tempCart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }
    }
    case "REMOVE": {
      let remove_cart = cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItem", JSON.stringify(remove_cart));
      return remove_cart;
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
