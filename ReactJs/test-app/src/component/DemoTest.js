import React, { useEffect, useState } from "react";

function DemoTest() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isTest, setIsSetTest] = useState(false);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState();
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
      id: userData.length + 1,
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

  const editUser = (id, name) => {
    setIsEdit(true);
    console.log(id);
    console.log(userData[id]);
    setName(userData[id].name);
    setMobile(userData[id].mobile);
    setPassword(userData[id].password);
    setUserId(userData[id].id);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const saveEditUser = () => {
    let user = {
      id: userId,
      name: name,
      mobile: mobile,
      password: password,
    };
    console.log(user);

    setUserData((prev) => [...prev.filter((item) => item.id != userId), user]);
    setIsEdit(false);
    setMobile("");
    setName("");
    setPassword("");
  };
  const deleteUser = (id) => {
    // const newData = userData.filter((item) => item.id != id);
    // console.log("nee", newData);
    // setUserData(newData);
    setUserData((prev) => [...prev.filter((item) => item.id !== id)]);
  };
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
        <button onClick={() => saveEditUser()}>Edit User</button>
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
                    <h3>Id: {item.id}</h3>
                    <p>Name: {item.name}</p>
                    <p>Mobile: {item.mobile}</p>
                    <p>Password: {item.password}</p>
                    <button onClick={() => editUser(index, item.name)}>
                      Edit
                    </button>
                    <button onClick={() => deleteUser(item.id)}>Delete</button>
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
