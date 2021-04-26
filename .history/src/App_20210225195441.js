import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import ReactContext from "./ReactContext";
const context = React.createContext();

function App() {
  return (
    <context.Provider value={{ name: "sosis bandar" }}>
      <ReactContext />
    </context.Provider>
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
  const consumer = React.useContext();
  return (
    <context.Consumer>
      <div>GOlabi</div>
    </context.Consumer>
  );
}

export default App;
