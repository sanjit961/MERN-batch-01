import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const arr = ["sdfs", "sdf", "sdfs"];
  const testArrFunc = (arr) => {
    console.log(arr);
  };
  const testArrFunc2 = (arr) => {
    console.log(arr);
  };
  const sum = (num1, num2) => {
    console.log(num1 + num2);
    // return num1 + num2;
    return num2;
  };
  return (
    <div>
      <h2>This is ParentComponent</h2>
      <ChildComponent
        name="test name..."
        myFunction={testArrFunc}
        arr={arr}
        testFunc={testArrFunc2}
        sum={sum}
      />
    </div>
  );
}

export default ParentComponent;
