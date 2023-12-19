import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE_ITEM) {
    const newCart = state.cart.filter((item) => item.id !== action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE_AMOUNT) {
    // grab the item by the id from the cart
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        // increase the amount in the item object
        const newItem = { ...item, amount: item.amount + 1 };
        return newItem;
      }
      return item;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE_AMOUNT) {
    // grab the item by the id from the cart
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        // increase the amount in the item object
        const newItem = { ...item, amount: amount - 1 };
        return newItem;
      }
      return item;
    });
    // check for item with amount of 0
    const filteredCart = newCart.filter((item) => item.amount !== 0);
    return { ...state, cart: filteredCart };
  }
  throw new Error(`No matching "$action.type" - action type`);
};

export default reducer;
