import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div data-testid = "resCard" className="p-4 m-4 w-[230px] bg-slate-200 rounded-lg hover:bg-slate-300">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="h-[200px] w-[200px] rounded-lg"
      />
      <h3 className="text-lg pt-2 font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Ratings</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

//Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
