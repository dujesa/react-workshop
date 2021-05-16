import RestaurantListItem from "../RestaurantListItem";
import "./RestaurantList.css";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list-container">
      {restaurants &&
        restaurants.map((restaurant) => (
          <RestaurantListItem
            className="restaurant-list-item"
            restaurant={restaurant}
          />
        ))}
    </div>
  );
};

export default RestaurantList;
