import React from "react";
import abAnarContext from "./context.js";

function MiveJat() {
  const consumer = React.useContext(abAnarContext);
  incrementAge = () => {};
  let sosis = consumer.age;
  sosis = sosis + 1;
  return (
    <div>
      {consumer.name}
      {sosis}
      <button onClick={incrementAge()}> increment </button>
    </div>
  );
}

export default MiveJat;
