import useRestaurantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResaturantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(null);
  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;
  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res?.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-bold text-lg py-2">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {categories.map((category, index) => (
        <ResaturantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showItems}
          setShowItems={() => setShowItems(index === showItems ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
