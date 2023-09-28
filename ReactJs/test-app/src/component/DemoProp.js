import React, { useEffect } from "react";

function DemoProp(props) {
  return (
    <>
      {props?.isChecked ? (
        <div style={{ backgroundColor: props?.isChecked ? "red" : "yellow" }}>
          <h2>Test Props</h2>
          <p>Name: {props.name}</p>
          <p>Address: {props.address}</p>
          {props.data?.map((item) => (
            <li>
              Name: {item.name}, Pin: {item.pin}
            </li>
          ))}
          <div>
            <h2>User Demo</h2>

            <p>Name: {props.demoData?.name}</p>
            <p>Number: {props.demoData?.number}</p>
            <button onClick={() => props?.testFunction("test")}>
              Test click
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>No data!</h3>
        </div>
      )}
    </>
  );
}

export default DemoProp;
