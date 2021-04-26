import React from "react";
//import logo from "./logo.svg";
import abAnarContext from "./context.js";
import ReactContext from "./ReactContext";

function App() {
  return (
    <abAnarContext.Provider value={{}}>
      <CheraghBargh />
    </abAnarContext.Provider>
  );
}

export default App;
