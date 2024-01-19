import express from "express";
import bodyParser from "body-parser";
import { todos } from "./mocks/mockData.js";

const app = express(); // getting the express instance which will have all the methods/functions
app.use(bodyParser.json()); // added this middleware to pass all the body data as Stringfied serialized fashion
const PORT = process.env.PORT || 5050; // port# which our backend server will run

//Configuring routes - give some response for any request

//for all root level - router
app.all("/", (req, res) => {
  // console.log(req); // request(req) -> anything which comes from client to server
  // console.log(res); // response(res) -> anything which goes from server to clinet

  res.send("I'm up and running"); // simple message we are sending
});

//Read - method: GET
/**
 * In this place we can make a "DB connection" and get the data from the database.
 * now we have just created the mockData from import it.
 */

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const reqId = req.params.id;
  const reqData = todos.filter((todo) => todo.id === reqId);
  res.json(reqData);
});

app.post("/api/todos", (req, res) => {
  const newTodo = req.body;
  const index = todos.findIndex((todo) => todo.id === newTodo.id);
  console.log(index);
  if (index == -1) {
    todos.push(newTodo);
    //sending the response to client
    res.json({
      message: "new todo added successfully!!",
    });
  } else {
    res.json({
      message: "Record is already present!!",
    });
  }
});

// adding the listen method which should respond to client requests
app.listen(PORT, () => {
  console.log(`Server is up and running at port#: ${PORT}`);
});
