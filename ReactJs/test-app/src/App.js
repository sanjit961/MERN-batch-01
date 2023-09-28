import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";
import Sum from "./component/Sum";
import DemoInput from "./component/DemoInput";
import DemoTest from "./component/DemoTest";
import DemoProp from "./component/DemoProp";
import { useState } from "react";

const App = () => {
  const [friendName, setFriendName] = useState("");

  let demoArr = [
    { name: "test1", pin: "345353" },
    { name: "test2", pin: "67744" },
    { name: "test3", pin: "677447" },
    { name: "test4", pin: "374477" },
    { name: "test5", pin: "0777" },
    { name: "test5", pin: "64777" },
  ];

  const demoObj = {
    name: "test",
    number: "122",
  };
  const demoObj2 = {
    name: "test1",
    number: "1223",
  };

  const testFunct = (name) => {
    console.log("I am a props fucntion", name);
  };
  const testFunct2 = (name) => {
    console.log("Hello! ", name);
  };

  return (
    <>
      {/* <Demo /> */}
      <div>
        <h2 className="App">Hello World!</h2>
        <input
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
        <DemoProp
          name={friendName}
          isChecked={false}
          address="Haryana"
          demoData={demoObj2}
          testFunction={testFunct}
        />
      </div>
      {/* <Sum /> */}
      <DemoTest />
      <DemoProp
        isChecked={true}
        name="test name"
        address="Assam"
        data={demoArr}
        demoData={demoObj}
        testFunction={testFunct2}
      />

      {/* <DemoInput /> */}
    </>
  );
};

export default App;
