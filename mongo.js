// const yup = require("yup");
const express = require("express");
const mongoose = require("mongoose");
const server = express();

const PORT = 3000;
const moviesDB = require("./model/model");

mongoose
  .connect(
    "mongodb+srv://akshijain:Akshi_0903@cluster0.ue58tm0.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connect to MongoDB");
    server.listen(PORT, () => {
      console.log(`Server is live on port ${PORT}`);
    });
  })
  .catch((ERROR) => {
    console.log("ERROR", ERROR);
  });



server.use(express.json());

server.get("/movie", async (req, res) => {
  res.status(200).send(await moviesDB.find());
});

server.post("/movie", async (req, res) => {
  try {
    const requestData = req.body;
   
    const add = requestData;
    await moviesDB.create(add);
    res.status(201).send("ADDED");
   
  } catch (e) {
    console.error(e);
  }
});

server.delete("/movie/:id", async(req, res) => {
 
  try{
    const {id} = req.params;
    // const objectId = new ObjectId(id);
    const del = await moviesDB.findByIdAndDelete(id) ;
    if(!del)
    {
      return res.status(404).send("not found");
    }
    res.status(200).send("Delete")
  }

  catch (e) {
    console.error(e);
  }

});

server.put("/movie/:id", async(req, res) => {
  

  try{
    const {id} = req.params;
    const update = await moviesDB.findByIdAndUpdate(id,req.body);
    if(!update)
    {
      return res.status(404).send("not found");
    }
    res.status(200).send("Upadated")
  }

  catch (e) {
    console.error(e);
  }
});
