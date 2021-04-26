import React from "react";
//import logo from "./logo.svg";
import abAnarContext from "./context.js";
//import ReactContext from "./CheraghBargh";
import CheraghBargh from "./CheraghBargh";
import { contextDefultValues as contextDefaultValues } from "./values.js";
import DasteBil from "./DasteBil.js";

function App() {
  const { value, setValues } = React.UseState({ contextDefultValues });
  const handelIncrement = (prevValues) => {
    let newAge = prevValues.age + 1;
    return { ...prevValues, age: newAge };
  };
  return (
    <abAnarContext.Provider
      value={{
        ...contextDefaultValues,
        age: 100,
        ageIncrementer: handelIncrement,
      }}
    >
      <CheraghBargh />
      <DasteBil />
    </abAnarContext.Provider>
  );
}

export default App;
