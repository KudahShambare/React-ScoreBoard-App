import React from "react";
import Countries from "./Countries";
import allCountryScores from "./Scores";
import "./App.css";

function App() {
  return (
    <div id="container">
      <h1 > High Scores Per Country </h1>
      <Countries allCountryScores={allCountryScores.sort((a,b)=>a.name>b.name)} />
    </div>
  );
}
export default App;
