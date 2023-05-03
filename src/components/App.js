import React, { useState } from "react";

import "../styles/App.css";

const data = {
  2018: ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  2019: ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  2020: [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came",
  ],
  2021: ["Covid Returns"],
  2022: ["Adventures of Saiman", "Adventures of Shaktiman"],
};

const dataKeys = Object.keys(data);
const myData = data[2018];
console.log("myData", myData);

const App = () => {
  const [value, setValue] = useState("");

  const handleSelectValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div id="main">
      {/* <h1>Hello</h1> */}
      <select name="" id="" onChange={handleSelectValue}>
        <option value=""></option>
        {dataKeys.map((data) => {
          return <option value={data}>{data}</option>;
        })}
      </select>
      <div id="selected-year">
        {value === "" ? "No year selected" : `Year Selected ${value}`}
      </div>
      {data[value]?.map((movie) => {
        return <li>{movie}</li>;
      })}
    </div>
  );
};

export default App;
