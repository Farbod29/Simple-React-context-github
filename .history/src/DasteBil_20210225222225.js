import React from "react";
import abAnarContext from "./context.js";

function DasteBil() {
  const consumer = React.useContext(abAnarContext);
  sosis = consumer.age;
  ageIncrementer2 (){
    
  }

  return (
    <div>
      {consumer.name}
      <button onClick={() => ageIncrementer2(sosis)}>
        {" "}
        increment{" "}
      </button>
    </div>
  );
}

export default DasteBil;
