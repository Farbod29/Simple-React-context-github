import React from "react";
import abAnarContext from "./context.js";

function MiveJat() {
  const consumer = React.useContext(abAnarContext);
  let sosis = consumer.age;
  sosis + 1;
  return (
    <div>
      {consumer.name}

      {consumer.age}
    </div>
  );
}

export default MiveJat;
