import React, { useState } from "react";

function Sum() {
  const [number1, setNumber1] = useState(100);
  const [number2, setNumber2] = useState(200);
  const [totalSum, setTotalSum] = useState(0);

  const sumFunc = (num1, num2) => {
    const total = parseInt(num1) + parseInt(num2);
    setTotalSum(total);

    // console.log(total);
  };

  return (
    <div>
      <h2>SUM</h2>
      <input
        type="number"
        placeholder="Enter number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter another"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <button onClick={() => sumFunc(number1, number2)}>calculate</button>
      <br />
      <span>The Sum is: {totalSum}</span>
    </div>
  );
}

export default Sum;
