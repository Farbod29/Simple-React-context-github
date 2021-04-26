import React from "react";
import abAnarContext from "./context.js";

function DasteBil() {
  const consumer = React.useContext(abAnarContext);
  spsis = consumer.age;
  return (
    <div>
      {consumer.name}
      {consumer.age}
    </div>
  );
}

export default DasteBil;
