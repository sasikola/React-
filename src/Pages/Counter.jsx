import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <>
      <h1 className="font-extrabold text-center">useState Hook</h1>
      <h1>count: {count} </h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
}

export default Counter;
