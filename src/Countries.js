import React from "react";

function Countries(props) {
  console.log(props.allCountryScores[1].scores[1].n);
  return (
    <div id="countriesReturn">
      <ul>
        {props.allCountryScores.map((country, index) => {
          return (
            <li key={index}>
              <h1>{country.name}</h1>
              {props.allCountryScores[index].scores.map((player) => {
                return <h2><pre>{player.n}                { player.s}</pre> </h2>
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Countries;
