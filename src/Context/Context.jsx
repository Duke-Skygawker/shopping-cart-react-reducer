import { createContext, useContext, useState } from "react";
import cartItems from "../data";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState(null);
  const [total, setTotal] = useState(null);
  const cartArray = cartItems.map((item) => item);

  const defaultState = {
    cart: cartArray,
    isLoading: false,
    amount: cartArray.length,
    total: total,
  };

  const updatePriceTotal = (state) => {
    let newTotal = 0;
    const defaultTotal = state.cart.map((item) => {
      return (newTotal += Number(item.price));
    });
    setTotal(newTotal);
  };

  const cartAmountUpdate = (state) => {
    let newItemAmount = 0;
    const newAmount = state.cart.map((item) => {
      return (newItemAmount += item.amount);
    });
    setItemsInCart(newItemAmount);
  };

  return (
    <GlobalContext.Provider
      value={{
        total,
        setTotal,
        itemsInCart,
        setItemsInCart,
        defaultState,
        updatePriceTotal,
        cartAmountUpdate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
