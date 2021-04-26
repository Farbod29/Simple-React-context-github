import React from "react";
//import logo from "./logo.svg";
import abAnarContext from "./context.js";
//import ReactContext from "./ReactContext";

function App() {
  return (
    <abAnarContext.Provider value={{}}>
      <ReactContext />
    </abAnarContext.Provider>
  );
}

function MiveJat() {
  const consumer = React.useContext(abAnarContext);
  return (
    <div>
      {consumer.name}
      {consumer.age}
    </div>
  );
}

export default App;
