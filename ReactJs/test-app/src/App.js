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
    { name: "test1" },
    { name: "test2" },
    { name: "test3" },
    { name: "test4" },
    { name: "test5" },
    { name: "test5" },
  ];

  return (
    <>
      {/* <Demo /> */}
      <div>
        <h2 className="App">Hello World!</h2>
        <input
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
        <DemoProp name={friendName} address="Haryana" />
      </div>
      {/* <Sum /> */}
      <DemoTest />
      <DemoProp name="test name" address="Assam" data={demoArr} />

      {/* <DemoInput /> */}
    </>
  );
};

export default App;
