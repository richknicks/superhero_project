import React, { useState, useEffect } from "react";
import Superhero from "./superhero";
import axios from "axios";

const SuperHerodex = () => {
  const [pokemonData, setPokemonData] = useState();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => {
        console.log(response.data.results);
      })
      .catch();
  }, []);
  return (
    <>
      <div>SuperHerodex Page</div>
      <Superhero />
    </>
  );
};

export default SuperHerodex;
