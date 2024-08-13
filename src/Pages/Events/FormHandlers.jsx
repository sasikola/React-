import React, { useState } from "react";

function FormHandlers() {
  const [inputData, setInputData] = useState("");

  const myFunc = (e) => {
    setInputData(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center mt-6">
        <input
          onChange={myFunc}
          className="border "
          type="text"
          placeholder="Enter something..."
        />
      </div>
      <p className="text-center mt-3 text-xl">
        {inputData ? inputData : "Hello"}
      </p>
    </>
  );
}

export default FormHandlers;
