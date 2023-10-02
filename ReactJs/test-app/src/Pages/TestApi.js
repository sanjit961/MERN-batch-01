import { useEffect, useState } from "react";

const parentGrid = {
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  gap: "10px",
  backgroundColor: "#2196F3",
  padding: "10px",
};

function TestApi() {
  const [jokes, setJokes] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getJokes("https://jsonplaceholder.typicode.com/users");
  }, []);

  const getJokes = (url) => {
    setIsLoaded(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setJokes(result);
        setIsLoaded(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
  return (
    <div>
      <h1>This is About page</h1>

      {/* <h1>This is Home page</h1> */}
      {isloaded ? (
        <h1>Your content is loading........... please wait........</h1>
      ) : (
        <div style={{display:"flex", flexWrap:"wrap"}}>
          {jokes.map((item, index) => {
            // const color = {
            //     color : item.completed ? 'green':'red',
            // };
            return (
              <div
                key={index}
                style={{
                  border: "2px solid yellow",
                  margin: "0 auto",
                  width: "400px",
                  marginBlock: "30px",
                  padding: "30px",
                }}
              >
                <h1>{item.name}</h1>
                <p>{item.username}</p>
                <p>{item.email}</p>
                <p>{item.address.city}</p>
                <p>{item.phone}</p>
                <p>{item.website}</p>

                {/* <h2>{item.id}</h2>
                            <h2>{item.title}</h2>
                            <p>completed <span style={color}>{item.completed?("true"):("false ") }</span></p> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TestApi;
