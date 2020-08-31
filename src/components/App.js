import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Body, Particles } from "./style.js";
import particles from "../particles";
import Navigation from "./Navigation";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";
import Portfolio from "./Portfolio";

const App = () => {
  return (
    <Router>
      <Body>
        <Particles params={particles} />
        <Navigation />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/skills"} component={Skills} />
          <Route path={"/about"} component={About} />
          <Route path={"/portfolio"} component={Portfolio} />
        </Switch>
      </Body>
      {/* <Footer>&copy; Rawand Dargali {new Date().getFullYear()}</Footer> */}
    </Router>
  );
};

export default App;
