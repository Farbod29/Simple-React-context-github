import React from "react";
import abAnarContext from "./context.js";

function MiveJat() {
  const consumer = React.useContext(abAnarContext);
  let sosis = consumer.age;
  sosis = sosis + 1;
  return (
    <div>
      {consumer.name}
      {sosis}
    </div>
  );
}

export default MiveJat;
