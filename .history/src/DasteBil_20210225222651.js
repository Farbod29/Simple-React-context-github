import React from "react";
import abAnarContext from "./context.js";

function DasteBil() {
  const consumer = React.useContext(abAnarContext);
  const [sosis1, setSosis1] = React.useState(consumer.age);

  // sosis = consumer.age;
  // const ageIncrementer2 = () => {
  //   sosis++;
  // };

  return (
    <div>
      {consumer.name}
      {/* <button onClick={() => ageIncrementer2(sosis)}> increment </button> */}
      {sosis1}
    </div>
  );
}

export default DasteBil;