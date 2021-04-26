import React from "react";
import abAnarContext from "./context.js";

function MiveJat() {
  const consumer = React.useContext(abAnarContext);
  let sosis = consumer.age;
  console.log(consumer);

  // const incrementAge = () => {
  //   sosis = sosis + 1;
  //   console.log(sosis);
  // };
  return (
    <div>
      {consumer.name}
      {sosis}
      <button onClick={() => consumer.ageIncrementer(consumer)}>
        {" "}
        increment{" "}
      </button>
      <button onClick={() => consumer.ageIncrementerManual(consumer)}>
        {" "}
        increment{" "}
      </button>
    </div>
  );
}

export default MiveJat;
