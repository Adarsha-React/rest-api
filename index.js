import express from "express";

const app = express(); // getting the express instance which will have all the methods/functions

const PORT = process.env.PORT || 5050; // port# which our backend server will run

//Configuring routes - give some response for any request

//for all root level - router
app.all("/", (req, res) => {
  console.log(req); // request(req) -> anything which comes from client to server
  console.log(res); // response(res) -> anything which goes from server to clinet

  res.send("I'm up and running"); // simple message we are sending
});

// adding the listen method which should respond to client requests
app.listen(PORT, () => {
  console.log(`Server is up and running at port#: ${PORT}`);
});
