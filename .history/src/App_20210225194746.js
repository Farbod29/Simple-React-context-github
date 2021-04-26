import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactContext from "./ReactContext";

function App() {
  const context = React.createContext();

  return (
    <context.Provider value={}>
      <div className="App">
        <ReactContext />
      </div>
    </context.Provider>
  );
}

export default App;
