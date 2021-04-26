import React from "react";
//import logo from "./logo.svg";
import abAnarContext from "./context.js";
//import ReactContext from "./CheraghBargh";
import CheraghBargh from "./CheraghBargh";
import { contextDefultValues as contextDefaultValues } from "./values.js";
import DasteBil from "./DasteBil.js";

function App() {
  const handelIncrement = () => {
    let newAge = contextDefaultValues.age + 1;
    return { ...contextDefaultValues, age: newAge };
  };
  return (
    <abAnarContext.Provider value={{ ...contextDefaultValues, age: 100 }}>
      <CheraghBargh />
      <DasteBil />
    </abAnarContext.Provider>
  );
}

export default App;
