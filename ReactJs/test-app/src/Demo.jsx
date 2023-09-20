import "./demo.css";

const headingStyle = {
  color: "red",
  textAlign: "center",
  backgroundColor: "black",
};

const Demo = () => {

  const testFunction = (name) => {
    console.log("this is test...", name);
  };

  const testData = () => {
    console.log(headingStyle);
  };

  testData();

  return (
    <>
      <h1 className="demo">Demo Compononet</h1>
      <p
        style={{
          color: "green",
          textAlign: "center",
          backgroundColor: "orange",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sint
        sequi suscipit tempora praesentium. Voluptas facere atque commodi
        libero, ipsa eius eveniet enim doloribus, nobis, dignissimos nulla
        architecto vitae aspernatur.
      </p>
      <button onClick={() => testFunction("sanjit")}>Click me</button>
      <div>
        <h4 style={headingStyle}>this is heading four</h4>
      </div>
    </>
  );
};

export default Demo;
