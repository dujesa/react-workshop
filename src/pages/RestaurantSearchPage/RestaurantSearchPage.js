import { useEffect, useState } from "react";
import restaurantApi from "../../api/restaurant";

import Layout from "../../components/Layout";
import Search from "../../components/Search";
import RestaurantList from "../../features/restaurant/RestaurantList";
import "./RestaurantSearchPage.css";

const RestaurantSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
    } else {
      restaurantApi.searchRestaurants(searchTerm).then(({ data }) => {
        setRestaurants(data);
      });
    }
  }, [searchTerm]);

  return (
    <Layout>
      <Search handleChange={setSearchTerm} />
      {searchTerm}
      <RestaurantList restaurants={restaurants} />
    </Layout>
  );
};

export default RestaurantSearchPage;
