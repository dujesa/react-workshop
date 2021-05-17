import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import RestaurantSearchPage from "./pages/RestaurantSearchPage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/restaurants">
          <div>Restaurant list page</div>
        </Route>
        <Route exact path="/">
          <RestaurantSearchPage />
        </Route>
        <Route path="/404">
          <div>not found page</div>
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
