import React from "react";
//import logo from "./logo.svg";
import context from "./context;
//import ReactContext from "./ReactContext";



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
  return <div>{consumer.name}</div>;
}

export default App;
