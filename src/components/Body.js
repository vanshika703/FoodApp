import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { filterData } from "../hooks/helper";
import useOnline from "../hooks/useonline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(allRestaurants);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline pls check your internet</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" text-sm text-center m-2 text-stone-50">
        <input
          type="text"
          className="border rounded-l w-96 p-2"
          placeholder="Search for you favorite restaurant here..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 bg-orange-500 rounded-r"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          console.log("Restaurant id :", restaurant.data.id);
          return (
            <Link to={"/restaurant/" + restaurant.data.id} key="restaurant.data.id">
              <RestaurantCard {...restaurant?.data} key={restaurant?.data.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
