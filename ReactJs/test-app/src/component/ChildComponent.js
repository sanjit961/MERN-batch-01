import React from "react";

function ChildComponent(props) {
  //   const arr = ["sdfs", "sdf", "sdfs"];
  //   console.log(props?.sum(2, 4));
  const data = "test";
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => props.sum(3, 5)}>Sum</button>
      <button onClick={() => props.testFunc(data)}>Sumbit</button>
      <h3>{props.name}</h3>
      <button onClick={() => props.myFunction(props.arr)}>Click</button>
    </div>
  );
}

export default ChildComponent;
