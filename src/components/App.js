import React from "react";

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

const years = Object.keys(data);
console.log(years);

const App = () => {
  const [value, setValue] = React.useState("") 

  const handleDropdown = (event)=>{
    // console.log("msg", event.target.value)
    setValue(event.target.value)
  }
  return (
    <div id="main">
      <select onChange={handleDropdown}>
        <option value="">Null</option>
        {
          years.map((year)=>{
            return <option value={year}>{year}</option>

          })
        }
      </select>
      <div>{data[value]}</div>
    </div>
  );
};

export default App;
