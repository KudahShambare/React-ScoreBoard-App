import React from "react";
function Players(props){
    return(
      <div>
        {props.allCountryScores.map((country)=>{
          return country.scores.map((player)=>{
              return (
                  <div>
              <h2><pre> {player.n }       {player.s}</pre></h2>
              <hr/>
              </div>
              )
          })
        })}
      </div>
    )
    }
    export default Players;