import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const { items: cartItems, total } = useSelector((store) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  console.log(cartItems);

  const calculateQty = () => {
    return cartItems?.map((items) => items.quantity).reduce((a, b) => a + b, 0);
  };

  const calculateTotalPrice = () => {
    return cartItems
      ?.map((items) => {
        return { price: items.price, quantity: items.quantity };
      })
      .reduce((oldVal, newVal) => oldVal + newVal.price * newVal.quantity, 0);
  };

  return (
    <div className="flex flex-col justify-center items-center m-5">
      {cartItems.map((item) => (
        <FoodItem key={item?.id} {...item} />
      ))}

      <div className="flex justify-between items-center w-3/5 m-2 p-2 ">
        <h1 className="text-base font-medium">Cart Totals : </h1>
        <h1 className="text-base font-medium">Quantity : {calculateQty}</h1>
        <p className="text-base font-medium">Price : Rs. {calculateTotalPrice() / 100}</p>
        <button className="p-1 text-red-500 text-sm font-medium" onClick={() => handleClearCart()}>
          CLEAR CART
        </button>
      </div>
    </div>
  );
};

export default Cart;
