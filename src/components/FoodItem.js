import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ id, name, description, cloudinaryImageId, price }) => {
  const dispatch = useDispatch();

  function handleRemoveItem(obj) {
    dispatch(removeItem(obj));
  }
  return (
    <div className="flex border-b-2 justify-between items-center m-1 p-1 w-3/5">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="w-40" />
      <p className="text-base text-stone-500">{name}</p>
      {/* <p>{description}</p> */}
      <p className="text-base text-stone-500">Rs. {price / 100}</p>
      <button className="p-1 text-red-500 text-sm font-medium" onClick={() => handleRemoveItem({ id, price })}>- REMOVE</button>
    </div>
  );
};

export default FoodItem;
