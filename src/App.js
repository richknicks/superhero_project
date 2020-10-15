import React from "react";
import Superhero from "./Components/superhero";
import Superherodex from "./Components/superherodex";
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
