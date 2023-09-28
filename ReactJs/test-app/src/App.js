import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";
import Sum from "./component/Sum";
import DemoInput from "./component/DemoInput";
import DemoTest from "./component/DemoTest";
import DemoProp from "./component/DemoProp";
import { useState } from "react";
import ParentComponent from "./component/ParentComponent";
import ParentComponent2 from "./component/ParentComponent2";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NoPage from "./Pages/NoPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

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
  const testArr = ["sfds", "sdfs"];

  return (
    <>
      <BrowserRouter>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        {/* <h2>test</h2> */}
        {/* <DemoInput/> */}
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      {/* <Demo /> */}
      {/* <div> */}
      {/* <h2 className="App">Hello World!</h2> */}
      {/* <input
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        /> */}
      {/* <DemoProp
          name={friendName}
          isChecked={false}
          address="Haryana"
          demoData={demoObj2}
          testFunction={testFunct}
        /> */}
      {/* </div> */}
      {/* <Sum /> */}
      {/* <DemoTest /> */}
      {/* <DemoProp
        isChecked={true}
        name="test name"
        address="Assam"
        data={demoArr}
        demoData={demoObj}
        testFunction={testFunct2}
      /> */}
      {/* <ParentComponent /> */}
      {/* <ParentComponent2 /> */}
      {/* <DemoInput /> */}
    </>
  );
};

export default App;
