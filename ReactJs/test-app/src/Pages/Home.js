import React, { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/posts

// https://jsonplaceholder.typicode.com/todos

function Home() {
  const [data, setData] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setData(result);
      });

    getImages("https://jsonplaceholder.typicode.com/photos");
  }, []);

  const getImages = (url) => {
    setIsLoaded(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("**", result);
        if (result.length > 0) {
          setAlbums(result);
          setIsLoaded(false);
        } else {
          setIsLoaded(true);
        }
      });
  };

  return (
    <div>
      <h2>Home Page</h2>
      {isLoaded ? (
        <h2>Loading....</h2>
      ) : (
        <div>
          {albums.map((item) => {
            return (
              <>
                <div>
                  <h2>{item.title}</h2>
                  <img src={item.thumbnailUrl} width={300} />
                </div>
              </>
            );
          })}
        </div>
      )}
      <img src="https://www.iages.in/images/21/6.jpg" />
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              border: "1px solid grey",
              width: "400px",
              margin: "20px auto",
            }}
          >
            <h5>Id: {item.id}</h5>
            <h2>title: {item.title}</h2>
            <p>Content: {item.body}</p>
            Status: <span>Completed</span>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
