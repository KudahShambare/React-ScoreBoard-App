import React from "react";

function Countries(props) {
  return (
    <div id="countriesReturn">
      <ul>
        {props.allCountryScores.map((country, index) => {
          return (
            <li key={index}>
              <h1>High Scores: {country.name}</h1>
              <hr />
              {props.allCountryScores[index].scores.map((player, num) => {
                return (
                  <div>
                    <h2 key={num}>
                      {" "}
                      <pre>
                        {player.n} {player.s}
                      </pre>{" "}
                    </h2>
                    <hr />
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Countries;
