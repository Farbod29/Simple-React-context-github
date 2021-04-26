import React from "react";
import abAnarContext from "./context.js";

function MiveJat() {
  const consumer = React.useContext(abAnarContext);
  let sosis = consumer.age;
  incrementAge = () => {
    sosis = sosis + 1;
  };
  console.log(sosis);
  return (
    <div>
      {consumer.name}
      {sosis}
      <button onClick={incrementAge}> increment </button>
    </div>
  );
}

export default MiveJat;
