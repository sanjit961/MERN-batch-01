import { upload } from "@testing-library/user-event/dist/upload";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const BASE_API = "http://localhost:3001/api";

const tDataStyle = {
  borderBottom: "1px solid black",
  borderCollapse: "collapse",
  padding: "10px",
};
function ApiCalls() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [username, setUserName] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [userId, setUserId] = useState("");

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

  const deleteUser = (id) => {
    // alert(id);
    fetch(`${BASE_API}/delete/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert(result.message);
        getAllUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUser = (id) => {
    // alert(id);
    fetch(`${BASE_API}/getById/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result.results);
          setName(result.results.name);
          setUserName(result.results.username);
          setMobile(result.results.phone);
          setEmail(result.results.email);
          setPasssword(result.results.password);
          setUserId(result.results._id);
          setIsOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    //
  }

  function closeModal() {
    setIsOpen(false);
  }
  const updateHandler = (id) => {
    alert(id);
    const userDataToUpdate = {
      username: username,
      name: name,
      phone: mobile,
      email: email,
      password: password,
    };

    fetch(`${BASE_API}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDataToUpdate),
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
        <h2 style={{ textAlign: "center" }}> Total: {data?.total}</h2>
        <table style={{ width: "60%", margin: "auto", textAlign: "center" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
          {data?.results?.map((item) => {
            return (
              <tr style={{ borderCollapse: "collapse" }}>
                <td style={tDataStyle}>{item.name}</td>
                <td style={tDataStyle}>{item.email}</td>
                <td style={tDataStyle}>{item.phone}</td>
                <td style={tDataStyle}>
                  <button onClick={() => getUser(item._id)}>update</button>
                  <button onClick={() => deleteUser(item._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>

          <form>
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
            <button onClick={() => updateHandler(userId)}>Submit</button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default ApiCalls;
