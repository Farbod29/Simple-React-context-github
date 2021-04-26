import React from "react";
//import logo from "./logo.svg";
import abAnarContext from "./context.js";
//import ReactContext from "./CheraghBargh";
import CheraghBargh from "./CheraghBargh";
import { contextDefaultValues } from "./values.js";
import DasteBil from "./DasteBil.js";

function App() {
  const [data, setData] = React.useState(contextDefaultValues);
  //console.log(React.useState(contextDefaultValues));
  const myState = React.useState(contextDefaultValues);
  const data = myState[0];
  const setData = myState[1];
  const handelIncrement = (prevValues) => {
    let newAge = prevValues.age + 1;
    setData({ ...prevValues, age: newAge });
  };

  return (
    <abAnarContext.Provider
      value={{
        ...data,
        ageIncrementer: handelIncrement,
      }}
    >
      <CheraghBargh />
      <DasteBil />
    </abAnarContext.Provider>
  );
}

export default App;
