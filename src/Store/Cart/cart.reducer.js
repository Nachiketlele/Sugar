// let cartData = localStorage.getItem("cartItem") || [];
let q1=JSON.parse(localStorage.getItem("list1"))
let q2=JSON.parse(localStorage.getItem("list2"))
let q3=JSON.parse(localStorage.getItem("list3"))
let bigarr=[...q1,...q2,...q3];

let cart1=JSON.parse(localStorage.getItem("cartItem"))||[]
export const cartReducer = (cart = cart1, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
let flag=false;
for(let j=0;j<cart.length;++j)
 { if(cart[j].id===action.payload)
  {cart[j].qty+=1;
    flag=true;
  }
}
  
    for(let i=0;i<bigarr.length;++i)
  {if(!flag)
    {if(bigarr[i].id===action.payload)
      {bigarr[i].qty=1;
    cart.push(bigarr[i])}}
  }
      localStorage.setItem("cartItem",JSON.stringify(cart));
      return
}
    case "REMOVE": {
      let newcart= cart.filter((item) => item.id !== action.payload);
      console.log(newcart)

      localStorage.setItem("cartItem",JSON.stringify(newcart));
      return newcart;
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
    default:  return cart;
  }
};
