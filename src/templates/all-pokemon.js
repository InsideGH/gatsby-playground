import React from "react";
import { Link } from "gatsby";
export default ({ pageContext: { allPokemon } }) => {
  return (
    <div style={{ width: 960, margin: "4rem auto" }}>
      {allPokemon.map((pokemon, index) => {
        return <Link to={`/pokemon/${pokemon.name}`} key={index}><h1>dd{pokemon.name}</h1></Link>;
      })}
    </div>
  );
};
