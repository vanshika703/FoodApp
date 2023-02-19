import { IMG_CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravel,
  avgRating,
  costForTwoString,
}) => {
  /* const { user } = useContext(UserContext); */
  return (
    <div className=" w-60 m-8 p-4 hover:shadow-md ease-in duration-200">
      <img className="restaurant-img" src={IMG_CDN_URL + cloudinaryImageId} />
      <h4 className="text-base font-medium">{name}</h4>
      <p className="text-xs text-stone-500">{cuisines.join(" , ")}</p>
      <div className="flex text-xs justify-between mt-2 text-stone-500">
        <p className="bg-green-500 p-1 text-stone-50">&#9733; {avgRating}</p>

        <p className="p-1">{Math.trunc(lastMileTravel)} mins</p>
        <p className="p-1">{costForTwoString}</p>
      </div>
      {/* <p>{user.name}</p> */}
    </div>
  );
};

export default RestaurantCard;
