import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Jokes Count: {jokes.length}</h1>
      {jokes.map((jokes) => (
        <div key={jokes.id}>
          <h2>{jokes.title}</h2>
          <p>{jokes.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
