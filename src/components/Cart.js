import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  console.log(cartItems);

  return (
    <div>
      <h1>Cart Items - {cartItems.length}</h1>
      <button onClick={handleClearCart}>Clear Cart</button>

      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
