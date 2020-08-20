import React from "react";
import superhero from "./superhero";
import superherodex from "./superherodex";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={superherodex} />
      <Route path="/:id" component={superhero} />
    </Switch>
  );
}

export default App;
