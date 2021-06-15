import React from "react";

function Countries(props){
  console.log(props.allCountryScores[1].scores[1].n);
  return(
    <div style={{border:"solid",width:"80%",textAlign:"center",marginLeft:"10%"}}>
     {props.allCountryScores.map((country)=>{
       return(
        <h1>{country.name}</h1>        
       )
    })
    }
    {props.allCountryScores.map((country)=>{
      return country.scores.map((player)=>{
        return <h2>{player.n}</h2>
      })
    }
    )}
</div>
)
  };

  export default Countries;
