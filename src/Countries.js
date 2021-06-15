import React from "react";
import Players from "./Players";


function Countries(props){
  console.log(props.allCountryScores[1].scores[1].n);
  return(
    <div style={{border:"solid",width:"80%",textAlign:"center",marginLeft:"10%"}}>
     {props.allCountryScores.map((country)=>{
       return(
         <div>
        <h1>{country.name}</h1>
        <hr/>
        <Players allCountryScores={props.allCountryScores}/>
        </div>
       )
    })
    }
    
</div>
)
  };

  export default Countries;
