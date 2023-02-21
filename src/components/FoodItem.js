import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";



const FoodItem = ({ id, name, description, cloudinaryImageId, price }) => {

  const dispatch = useDispatch();

  function handleRemoveItem(id) {
    dispatch(removeItem(id));
  }
  return (
    <div>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <p>{name}</p>
      <p>{description}</p>
      <p>{price / 100}</p>
      <button onClick={() => handleRemoveItem(id)}>Add Button</button>
    </div>
  );
};

export default FoodItem;
