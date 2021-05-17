import RestaurantListItem from "../RestaurantListItem";
import "./RestaurantList.css";

const RestaurantList = ({ restaurants, isFavorite, toggleFavorite }) => {
  return (
    <div className="restaurant-list-container">
      {restaurants &&
        restaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.urlFriendlyName}
            className="restaurant-list-item"
            restaurant={restaurant}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ))}
    </div>
  );
};

export default RestaurantList;
