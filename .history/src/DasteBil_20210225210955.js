import React from "react";

export default function DasteBil() {
  const consumer = React.useContext(abAnarContext);
  return (
    <div>
      {consumer.name}
      {consumer.age}
    </div>
  );
}

//export default DasteBil;
