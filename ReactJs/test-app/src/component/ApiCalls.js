import React, { useEffect, useState } from "react";
const BASE_API = "http://localhost:3001/api";

function ApiCalls() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [username, setUserName] = useState("");
  const [data, setData] = useState({});

  const registerHandler = () => {
    const userData = {
      email: email,
      name: name,
      username: username,
      password: password,
      phone: mobile,
    };
    console.log("userData", userData);

    fetch(`${BASE_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.Message) {
          alert(result.Message);
          getAllUser();
          setEmail("");
          setName("");
          setMobile("");
          setUserName("");
          setPasssword("");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          alert("Something went wrong");
        }
      });
  };

  const getAllUser = () => {
    fetch(`${BASE_API}/getAllUsers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          alert("Something went wrong");
        }
      });
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      <h2>Register User</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <br />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="mobile"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
          placeholder="password"
        />
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
        <br />
        <button onClick={() => registerHandler()}>Submit</button>
      </div>
      <div>
        <h2> Total: {data?.total}</h2>
        {data?.results?.map((item) => {
          return (
            <div>
              Name: {item.name} email: {item.phone}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ApiCalls;
