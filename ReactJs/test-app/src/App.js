import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";
import Sum from "./component/Sum";

const App = () => {
  return (
    <>
      <Demo />
      <div>
        <h2 className="App">Hello World!</h2>
      </div>
      <Sum/>
    </>
  );
};

export default App;
