import { useEffect, useState } from "react";
import * as storage from "../../../services/storage";

const FAVORITE_RESTAURANTS_KEY = "days:react-workshop:favorite-restaurants";

const getFavoriteRestaurants = () => {
  const savedfavoriteRestaurants = storage.get(FAVORITE_RESTAURANTS_KEY);

  return savedfavoriteRestaurants ?? [];
};

const useFavoriteRestaurants = () => {
  const [favoriteRestaurants, setFavoriteRestaurants] = useState(
    getFavoriteRestaurants()
  );

  useEffect(() => {
    if (!!favoriteRestaurants) {
      storage.save(FAVORITE_RESTAURANTS_KEY, favoriteRestaurants);
    }
  }, [favoriteRestaurants]);

  const isFavorite = (checkingRestaurant) => {
    if (!favoriteRestaurants) {
      return false;
    }

    const isFound = favoriteRestaurants.find(
      (favoriteRestaurant) =>
        checkingRestaurant.urlFriendlyName ===
        favoriteRestaurant.urlFriendlyName
    );

    return !!isFound;
  };

  const toggleFavorite = (restaurant) => {
    const isFavoriteRestaurant = isFavorite(restaurant);

    if (isFavoriteRestaurant) {
      const newFavorites = favoriteRestaurants.filter(
        (favoriteRestaurant) =>
          favoriteRestaurant.urlFriendlyName !== restaurant.urlFriendlyName
      );

      setFavoriteRestaurants(newFavorites);

      return;
    }

    setFavoriteRestaurants((favoriteRestaurants) => [
      ...favoriteRestaurants,
      restaurant,
    ]);
  };

  return { favoriteRestaurants, toggleFavorite, isFavorite };
};

export default useFavoriteRestaurants;
