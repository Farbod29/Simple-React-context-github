import React from "react";
//import logo from "./logo.svg";
//import "./App.css";
//import ReactContext from "./ReactContext";
const abAnarContext = React.createContext();

function App() {
  return (
    <abAnarContext.Provider value={{ name: "sosis bandar" }}>
      <ReactContext />
    </abAnarContext.Provider>
  );
}
function ReactContext() {
  return (
    <div>
      <MiveJat />
    </div>
  );
}
function MiveJat() {
  const consumer = React.useContext(abAnarContext);
  console.log(consumer);
  return (
    <abAnarContext.Consumer>
      <div>GOlabi</div>
    </abAnarContext.Consumer>
  );
}

export default App;
