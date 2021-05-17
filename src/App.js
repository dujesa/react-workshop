import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default App;
