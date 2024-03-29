import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import MenuShimmer from "./MenuShimmer";
import { addItem } from "../utils/cartSlice";
import errorImg from "../img/error.png";
import { useDispatch, useSelector } from "react-redux";

import useRestaurant from "../hooks/useRestaurant";

const RestaurantMenu = () => {
  /* const [quantity, setQuantity] = useState(0); */
  const { id } = useParams();

  const restaurant = useRestaurant(id);
  console.log("Restaurant", restaurant);

  const dispatch = useDispatch();
  function handleAddItem(item) {
    dispatch(addItem(item));
    console.log(item);
  }
  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="flex flex-col items-center sm:items-start sm:flex-row justify-center">
      <div className="flex m-3 p-3 flex-col sm:w-1/5 w-4/5">
        {/* <h1>Restaurant id : {id}</h1> */}

        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h2 className="text-xl font-medium">{restaurant?.name}</h2>
        <h3 className="text-base text-stone-500">{restaurant?.cuisines.join(" , ")}</h3>
        <h3 className="text-base text-stone-500">
          {restaurant?.area} , {restaurant?.city}
        </h3>
        <div className="flex text-base justify-between mt-2 text-stone-500">
          <h3 className="bg-green-500 p-1 text-stone-50">&#9733; {restaurant?.avgRating}</h3>
          <h3 className="p-1">{restaurant?.costForTwoMsg}</h3>
          <h3 className="p-1">{restaurant?.sla?.deliveryTime} minutes</h3>
        </div>
      </div>
      <div className="flex flex-col m-3 p-3 sm:w-2/5 w-4/5">
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div key={item?.id} className="m-2 p-2 flex justify-between border-b">
              <div className="w-4/5">
                <p className="text-base font-medium">{item?.name}</p>
                <p className="text-xs text-stone-500">Rs.{item?.price / 100}</p>
                <p className="hidden sm:block text-xs text-stone-500 max-w-[300px]">
                  {item?.description}
                </p>
                {/* {item?.quantity ? setQuantity(item?.quantity) : setQuantity(0)} */}
                <button
                  className="p-1 text-green-500 text-sm font-medium"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                  {/* {quantity != 0 ? "-" + quantity + "+" : "ADD"} */}
                </button>
              </div>
              <div className="w-2/5 sm:w-auto">
                <img
                  src={IMG_CDN_URL + item?.cloudinaryImageId}
                  onerror={errorImg}
                  className=" sm:w-52 sm:max-w-xl"
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
