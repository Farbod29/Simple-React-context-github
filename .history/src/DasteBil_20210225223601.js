import React from "react";
import abAnarContext from "./context.js";

function DasteBil() {
  const consumer = React.useContext(abAnarContext);
  let [sosis1, setSosis1] = React.useState(consumer.age);

  // sosis = consumer.age;
  // const ageIncrementer2 = () => {
  //   sosis++;
  // };

  const ageIncrementer2 = () => {
    setSosis1(sosis1 + 1);
  };

  const ageIncrementer3 = () => {
    sosis1 = sosis1 + 1;
  };

  return (
    <div>
      {consumer.name}
      <button onClick={() => ageIncrementer2()}> increment </button>
      <button onClick={() => ageIncrementer3()}> increment </button>
      {sosis1}
    </div>
  );
}

export default DasteBil;
