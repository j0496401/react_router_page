import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Profile from './Profile';
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
