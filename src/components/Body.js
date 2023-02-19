import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { filterData } from "../hooks/helper";
import useOnline from "../hooks/useonline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);

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
      <div className="text-sm text-center m-7">
        <div className="p-2">
          <h1 className="text-5xl p-2 font-bold italic">Grub Hub</h1>
          <h4 className="text-2xl p-2 font-medium mb-4">
            Fresh and tasty food, delivered to satisfy all your hunger pangs.
          </h4>

          <input
            type="text"
            className="border rounded-l w-2/5 p-4 text-base font-medium"
            placeholder="Search for you favorite restaurant or dishes here..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-4 bg-orange-500 rounded-r text-base text-stone-50 font-medium"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
          {/* <input
            value={user.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          /> */}
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          console.log("Restaurant id :", restaurant.data.id);
          return (
            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
              <RestaurantCard {...restaurant?.data} key={restaurant?.data.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
