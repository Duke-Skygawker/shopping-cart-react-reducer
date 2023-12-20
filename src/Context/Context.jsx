import { useContext, useReducer, useEffect, createContext } from "react";
import cartItems from "../data";
import reducer from "../Reducer/reducer";
import getTotals from "../Reducer/utils";
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  LOADING,
  DISPLAY_ITEMS,
} from "../Reducer/actions";
const url = "https://www.course-api.com/react-useReducer-cart-project";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const defaultState = {
  loading: false,
  cart: cartItems,
  amount: 1,
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { newTotal: total, newItemAmount: amount } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id: id } });
  };
  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id: id } });
  };
  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id: id } });
  };
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        total,
        amount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
