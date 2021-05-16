import RestaurantListItem from "../RestaurantListItem";

const RestaurantList = ({restaurants}) => {
  return (
    <div className="restaurant-list-container">
      {restaurants && restaurants.map((restaurant) => (
        <RestaurantListItem
          className="restaurant-list-item"
          restaurant={restaurant}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
