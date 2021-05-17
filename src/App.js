import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import RestaurantSearchPage from "./pages/RestaurantSearchPage";
import RestaurantsPage from "./pages/RestaurantsPage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/restaurants">
          <RestaurantsPage />
        </Route>
        <Route exact path="/">
          <RestaurantSearchPage />
        </Route>
        <Route path="/404">
          <NotFoundPage />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
