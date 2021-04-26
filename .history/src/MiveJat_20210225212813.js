import React from "react";
import abAnarContext from "./context.js";

function MiveJat() {
  let sosis = consumer.age;
  console.log(sosis);
  const consumer = React.useContext(abAnarContext);
  incrementAge = () => {
    sosis = sosis + 1;
  };
  return (
    <div>
      {consumer.name}
      {sosis}
      <button onClick={incrementAge()}> increment </button>
    </div>
  );
}

export default MiveJat;
