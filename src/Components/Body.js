import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurants from "../utils/useListOfRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const listOfRestaurants = useListOfRestaurants();
  const PromotedLabel = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);
  if (onlineStatus === false)
    return (
      <h1 className="p-6 m-4 border bg-slate-200 font-bold rounded-lg">
        Looks like you are offline!!. Please check your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex p-4">
        <div className="">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            value={searchText}
            placeholder="Search for food"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-sky-300 rounded-lg mx-2 px-3 py-1 hover:bg-sky-500"
            onClick={() => {
              const updatedRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(updatedRes);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            type="button"
            className="bg-sky-300 rounded-lg mx-4 px-3 py-1 hover:bg-sky-500"
            onClick={() => {
              const filterRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filterRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <PromotedLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
