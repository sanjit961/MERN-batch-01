import React from "react";

function DemoProp(props) {
  return (
    <div>
      <h2>Test Props</h2>
      <p>Name: {props.name}</p>
      <p>Address: {props.address}</p>
      {props.data?.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}

export default DemoProp;
