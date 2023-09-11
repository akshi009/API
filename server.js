// const yup = require("yup");
const express = require("express");
const server = express();
const PORT = 3001;

const movie = [
  {
    id: 1,
    name: "JAWAN",
    actor: "SRK",
    image:"https://www.livemint.com/lm-img/img/2023/09/08/1600x900/Jawan_1689069088718_1694147411741.jpg",
  },
  {
    id: 2,
    name: "PK",
    actor: "AMIR KHAN",
    image:"https://www.livemint.com/lm-img/img/2023/09/08/1600x900/Jawan_1689069088718_1694147411741.jpg",
  },
  {
    id: 3,
    name: "KICK",
    actor: "SALMAN KHAN",
    image:"https://www.livemint.com/lm-img/img/2023/09/08/1600x900/Jawan_1689069088718_1694147411741.jpg",
  },
];

server.use(express.json());

server.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});

server.get("/movie", function (req, res) {
  res.send(movie);
});

server.get("/movie/:id", function (req, res) {
  const id = movie.find((x) => x.id === Number(req.params.id));
  if (id) {
    res.send(id);
  } else {
    res.status(404).send("Not Found");
  }
});

server.post("/movie", function (req, res) {
  const movieadd = req.body;
  cars.push(movieadd);
  res.status(201).send("Added");
});

server.delete("/movie/:id", async (req, res) => {
  const index = movie.findIndex((i) => i.id.toString() === req.params.id);
  if (index > -1) {
    movie.splice(index, 1);
    res.send("DELETED");
  } else {
    res.status(404).send("NOT FOUND");
  }
});

server.patch("/movie/:id", function (req, res) {
  const id = req.params.id;
  const data = req.body;
  const index = movie.findIndex((c) => c.id.toString() === id);
  if (index > -1) {
    const old = movie[index];
    movie[index] = {
      ...old,
      ...data,
    };
    res.send("Updated");
  } else {
    res.status(404).send("Not Found");
  }
});
