const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function start() {
  await client.connect();

  const db = client.db("college");
  const students = db.collection("students");

  // CREATE student
  app.post("/students", async (req, res) => {
    await students.insertOne(req.body);
    res.send("Student added");
  });

  // READ students
  app.get("/students", async (req, res) => {
    const data = await students.find().toArray();
    res.send(data);
  });

  // DELETE student by roll number
  app.delete("/students/:roll", async (req, res) => {
    const roll = Number(req.params.roll);

    await students.deleteOne({ roll: roll });
    res.send("Student deleted");
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

start();
