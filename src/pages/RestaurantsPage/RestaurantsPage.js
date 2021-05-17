import { useEffect, useState } from "react";

import restaurantApi from "../../api/restaurant";
import Layout from "../../components/Layout";
import useFavoriteRestaurants from "../../features/restaurant/hooks/useFavoriteRestaurants";
import RestaurantList from "../../features/restaurant/RestaurantList";

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const { toggleFavorite, isFavorite } = useFavoriteRestaurants();

  useEffect(() => {
    restaurantApi.getRestaurants().then(({ data }) => setRestaurants(data));
  }, []);

  return (
    <Layout>
      <RestaurantList
        restaurants={restaurants}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </Layout>
  );
};

export default RestaurantsPage;
