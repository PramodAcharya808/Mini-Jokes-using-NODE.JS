import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokesList = [
    { id: 1, title: "first Joke", body: "This is my first joke" },
    { id: 2, title: "second Joke", body: "This is my second joke" },
    { id: 3, title: "third Joke", body: "This is my third joke" },
    { id: 4, title: "fourth Joke", body: "This is my fourth joke" },
    { id: 5, title: "fifth Joke", body: "This is my fifth joke" },
    { id: 6, title: "sixth Joke", body: "This is my sixth joke" },
    { id: 7, title: "seventh Joke", body: "This is my first joke" },
    { id: 8, title: "eighth Joke", body: "This is my eighth joke" },
  ];

  res.send(jokesList);
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
