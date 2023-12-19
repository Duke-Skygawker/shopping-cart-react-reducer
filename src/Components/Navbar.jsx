import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "../Context/Context";
const Navbar = () => {
  const { itemsInCart } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{itemsInCart}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
