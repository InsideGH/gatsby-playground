import React from "react";

export default ({ pageContext: { pokemon } }) => {
  return (<div style={{ width: 960, margin: "4rem auto" }}>
    <h1>NAME : {pokemon.name}</h1>
  </div>
  )
}
