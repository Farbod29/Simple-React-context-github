import React from "react";
//import logo from "./logo.svg";
import abAnarContext from "./context.js";
import ReactContext from "./CheraghBargh";
import CheraghBargh from "./CheraghBargh";
import { contextDefultValues } from "./values.js";

function App() {
  return (
    <abAnarContext.Provider value={contextDefultValues}>
      <CheraghBargh />
    </abAnarContext.Provider>
  );
}

export default App;
