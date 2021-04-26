import React from "react";
import abAnarContext from "./context.js";

function DasteBil() {
  const consumer = React.useContext(abAnarContext);
  return (
    <div>
      {consumer.name}
      {consumer.age}
    </div>
  );
}

export default DasteBil;
