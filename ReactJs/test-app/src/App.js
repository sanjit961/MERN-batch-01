import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";
import Sum from "./component/Sum";
import DemoInput from "./component/DemoInput";
import DemoTest from "./component/DemoTest";

const App = () => {
  return (
    <>
      {/* <Demo /> */}
      <div>
        <h2 className="App">Hello World!</h2>
      </div>
      {/* <Sum /> */}
      <DemoTest/>
      {/* <DemoInput /> */}
    </>
  );
};

export default App;
