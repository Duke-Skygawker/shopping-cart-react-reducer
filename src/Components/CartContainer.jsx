import CartItem from "./CartItem";
import { useEffect, useReducer } from "react";
import { useGlobalContext } from "../Context/Context";

const CartContainer = () => {
  const { state, defaultState, updatePriceTotal, cartAmountUpdate } =
    useGlobalContext();

  useEffect(() => {
    // update total on state change, only amount changes in the state, based on it's change, trigger useffect and update globalcontext states
    updatePriceTotal(state);
    cartAmountUpdate(state);
  }, [state]);

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
