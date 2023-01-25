import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravel,
  avgRating,
  costForTwoString,
}) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-img" src={IMG_CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <p className="cuisines">{cuisines.join(" , ")}</p>
      <p className="restaurant-details">
        <span>&#9733; {avgRating}</span> &#9702; {Math.trunc(lastMileTravel)} mins &#9702;{" "}
        {costForTwoString}
      </p>
    </div>
  );
};

export default RestaurantCard;
