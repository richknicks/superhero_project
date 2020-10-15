import React, { useState, useEffect } from "react";
import Superhero from "./superhero";
import axios from "axios";

const SuperHerodex = () => {
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => {
        console.log(response);
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
