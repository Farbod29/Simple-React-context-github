import React from "react";
//import logo from "./logo.svg";
import abAnarContext from "./context.js";
//import ReactContext from "./CheraghBargh";
import CheraghBargh from "./CheraghBargh";
import { contextDefaultValues } from "./values.js";
import DasteBil from "./DasteBil.js";

function App() {
  //const [data, setData] = React.useState(contextDefaultValues);
  //console.log(React.useState(contextDefaultValues));
  const myState = React.useState(contextDefaultValues);
  const data = myState[0];
  const setData22222 = myState[1];
  const handelIncrement = (prevValues) => {
    let newAge = prevValues.age + 1;
    setData22222({ ...prevValues, age: newAge });
  };
  // Reducer - Callback - Children - UseMemo - Spliting - LazyLoad - Suspense -
  // Redux
  return (
    <abAnarContext.Provider
      value={{
        ...data,
        ageIncrementer: handelIncrement,
      }}
    >
      <CheraghBargh />
      <DasteBil />
    </abAnarContext.Provider>
  );
}

export default App;
