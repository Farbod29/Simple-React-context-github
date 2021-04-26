import React from "react";
//import logo from "./logo.svg";
import abAnarContext from "./context.js";
//import ReactContext from "./CheraghBargh";
import CheraghBargh from "./CheraghBargh";
import { contextDefaultValues } from "./values.js";
import DasteBil from "./DasteBil.js";

function App() {
  const { data, setData } = React.UseState(contextDefaultValues);
  const handelIncrement = (prevValues) => {
    let newAge = prevValues.age + 1;
    return setData({ ...prevValues, age: newAge });
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
