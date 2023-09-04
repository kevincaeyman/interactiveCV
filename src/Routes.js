// eslint-disable-next-line no-unused-vars
import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Services from "./components/Services";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/services" component={Services} />
      <Route path="/github" component={GitHub} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default Routes;
