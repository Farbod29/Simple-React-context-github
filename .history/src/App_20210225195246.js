import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import ReactContext from "./ReactContext";

function App() {
  const context = React.createContext();

  return (
    <context.Provider value={{ name: "sosis bandar" }}>
      <ReactContext />
    </context.Provider>
  );
}
  function ReactContext() {
  return <div>
    <MiveJat/>
    </div>;
}
function MiveJat() {
  return (
  <context.Consumer
  <div>  
  GOlabi
  </div>)
}


export default App;
