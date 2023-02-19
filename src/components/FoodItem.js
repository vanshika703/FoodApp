import { IMG_CDN_URL } from "../utils/constants";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <p>{name}</p>
      <p>{description}</p>
      <p>{price / 100}</p>
    </div>
  );
};

export default FoodItem;
