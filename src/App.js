import React from "react";
import Superhero from "./superhero";
import Superherodex from "./superherodex";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Superherodex} />
      <Route path="/:id" component={Superhero} />
    </Switch>
  );
}

export default App;
