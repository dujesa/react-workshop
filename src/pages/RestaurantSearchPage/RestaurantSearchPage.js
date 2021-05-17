import { useEffect, useState } from "react";
import restaurantApi from "../../api/restaurant";

import Layout from "../../components/Layout";
import Search from "../../components/Search";
import useFavoriteRestaurants from "../../features/restaurant/hooks/useFavoriteRestaurants";
import RestaurantList from "../../features/restaurant/RestaurantList";
import "./RestaurantSearchPage.css";

const RestaurantSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const { favoriteRestaurants, toggleFavorite, isFavorite } =
    useFavoriteRestaurants();

  useEffect(() => {
    if (!searchTerm) {
      setRestaurants(favoriteRestaurants);

      return;
    }

    restaurantApi.searchRestaurants(searchTerm).then(({ data }) => {
      setRestaurants(data);
    });
  }, [favoriteRestaurants, searchTerm]);

  return (
    <Layout>
      <Search handleChange={setSearchTerm} />
      {searchTerm}
      <RestaurantList
        restaurants={restaurants}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </Layout>
  );
};

export default RestaurantSearchPage;
