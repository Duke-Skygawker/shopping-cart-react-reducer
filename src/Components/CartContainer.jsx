import CartItem from "./CartItem";
import { useEffect, useReducer } from "react";
import { useGlobalContext } from "../Context/Context";
import reducer from "../Reducer/reducer";
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from "../Reducer/actions";

const CartContainer = () => {
  const { defaultState, updatePriceTotal, cartAmountUpdate } =
    useGlobalContext();
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    // update total on state change, only amount changes in the state, based on it's change, trigger useffect and update globalcontext states
    updatePriceTotal(state);
    cartAmountUpdate(state);
  }, [state]);

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
  if (state.cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {state.cart.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              {...cartItem}
              removeItem={removeItem}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
            />
          );
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${defaultState.total}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
