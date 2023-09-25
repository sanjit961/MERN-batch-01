import React, { useEffect, useState } from "react";

function DemoTest() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isTest, setIsSetTest] = useState(false);
  const [userData, setUserData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  //   CRUD - Create Read Update Delete

  useEffect(() => {
    if (name.length != 0) {
      setIsSetTest(true);
    } else {
      setIsSetTest(false);
    }
  }, [name, password, password]);

  const addUser = () => {
    let user = {
      name: name,
      mobile: mobile,
      password: password,
    };
    // console.log(user);

    setUserData((prev) => [...prev, user]);
    setName("");
    setMobile("");
    setPassword("");
    // setUserData((prev)=> [...prev, user]);

    // setUserData([user]);
  };

  const editUser = (id) => {
    setIsEdit(true);
    console.log(id);
    console.log(userData[id]);
    setName(userData[id].name);
    setMobile(userData[id].mobile);
    setPassword(userData[id].password);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {isTest ? (
        <span style={{ color: "green" }}>working</span>
      ) : (
        <span style={{ color: "red" }}>Not working</span>
      )}
      <br />
      <input
        type="text"
        placeholder="Enter your Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {!isEdit ? (
        <button onClick={() => addUser()}>Add User</button>
      ) : (
        <button>Edit User</button>
      )}
      <div>
        <h2 style={{ textAlign: "center" }}>Users - {userData.length}</h2>
        {userData.length != 0
          ? userData.map((item, index) => {
              return (
                <>
                  <div
                    style={{
                      textAlign: "center",
                      border: "1px solid grey",
                      width: "40%",
                      margin: "40px auto",
                    }}
                  >
                    <h3>{index}</h3>
                    <p>Name: {item.name}</p>
                    <p>Mobile: {item.mobile}</p>
                    <p>Password: {item.password}</p>
                    <button onClick={() => editUser(index)}>Edit</button>
                  </div>
                </>
              );
            })
          : "No Data"}
      </div>
    </div>
  );
}

export default DemoTest;
