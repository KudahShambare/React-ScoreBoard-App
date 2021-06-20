import React from "react";
function Players(props) {
  return (
    <div>
      {props.allCountryScores.map((country,index) => {
        return country.scores.map((player) => {
          return (
            <div>
              <h2 key={index}>
                <pre>
                  console.log(5555);
                  {player.n} {player.s} 
                </pre>
              </h2>
              <hr />
            </div>
          );
        });
      })}
    </div>
  );
}
export default Players;
