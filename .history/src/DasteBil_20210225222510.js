import React from "react";
import abAnarContext from "./context.js";

function DasteBil() {
  [sosis1 , setsosis] = 

  const consumer = React.useContext(abAnarContext);
  sosis = consumer.age;
  const ageIncrementer2 = () => {
    sosis++;
  };

  return (
    <div>
      {consumer.name}
      <button onClick={() => ageIncrementer2(sosis)}> increment </button>
      {sosis}
    </div>
  );
}

export default DasteBil;
