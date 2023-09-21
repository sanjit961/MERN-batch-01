import React, { useEffect, useState } from "react";
const commonStyle = {
  backgroundColor: "red",
  margin: "40px",
};
const inputStyle = {
  padding: "4px",
  margin: "4px",
  display: "block",
  width: "50%",
};
function DemoInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log(name);
    console.log(email);
    console.log(mobile);
    console.log(password);
  }, [name, email, mobile, password]);

  useEffect(() => {
    console.log(Object.getOwnPropertyNames(userData));
  }, [userData]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name.trim().length !== 0 &&
      email.trim().length !== 0 &&
      mobile.trim().length !== 0 &&
      password.trim().length !== 0
    ) {
      const inputDetails = {
        name: name,
        email: email,
        mobile: mobile,
        password: password,
      };
      console.log(inputDetails);

      setUserData(inputDetails);

      alert("Done!");
      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
    } else {
      alert("please fill!");
    }
  };

  return (
    <>
      <div>
        <form style={{ width: "50%", margin: "auto" }}>
          <input
            type="text"
            style={inputStyle}
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />

          <input
            type="text"
            style={inputStyle}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="mobile"
          />

          <input
            type="password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button style={inputStyle} onClick={(e) => submitHandler(e)}>
            Summit
          </button>
        </form>
      </div>
      {Object.getOwnPropertyNames(userData).length !== 0 ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Mobile: {userData.mobile}</p>
          <p>Password: {userData.password}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default DemoInput;
