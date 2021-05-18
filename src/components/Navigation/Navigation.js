import { Link, useLocation } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation-link-wrap">
        <li
          className={
            pathname === "/" ? "navigation-link--primary" : "navigation-link"
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={
            pathname === "/restaurants"
              ? "navigation-link--primary"
              : "navigation-link"
          }
        >
          <Link to="/restaurants">Restaurants</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
