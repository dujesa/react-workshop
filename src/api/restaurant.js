import axios from "axios";

const restaurantApi = {
  searchRestaurants: (searchTerm) => {
    return axios.get(
      `${process.env.REACT_APP_API_BASE}/restaurants/search?latitude=43.508133&longitude=16.440193&isFoodPickup=false&query=${searchTerm}`
    );
  },
  getRestaurants: () => {
    return axios.get(
      `${process.env.REACT_APP_API_BASE}/restaurants?latitude=43.508133&longitude=16.440193&isFoodPickup=false`
    );
  },
};

export default restaurantApi;
