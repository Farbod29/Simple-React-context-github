import React from "react";
import abAnarContext from "./context.js";

function MiveJat() {
  const consumer = React.useContext(abAnarContext);
  return (
    <div>
      {consumer.name}
      {consumer.age}
    </div>
  );
}

export default MiveJat;
