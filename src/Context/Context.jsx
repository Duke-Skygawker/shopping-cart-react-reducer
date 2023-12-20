import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import { getTotals } from "./utils";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
const url = "https://www.course-api.com/react-useReducer-cart-project";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const defaultState = {
  cart: [],
  isLoading: false,
  amount: 1,
  total: total,
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(null);
  const [total, setTotal] = useState(null);
  const cartArray = cartItems.map((item) => item);

  const updatePriceTotal = (state) => {
    let newTotal = 0;
    const defaultTotal = state.cart.map((item) => {
      return (newTotal += Number(item.price) * item.amount);
    });
    setTotal(newTotal.toFixed(2));
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
        cart,
        setCart,
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
