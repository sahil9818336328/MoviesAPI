import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Singlemovie";

const App = () => {
  // REACT-ROUTER FUNCTIONALITY
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:id" children={<Movie />} />
      </Switch>
    </Router>
  );
};

export default App;
