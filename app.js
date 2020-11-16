// create an express app
const express = require("express");
const app = express();

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>YAY TESTING WEBHOOKS</h1>");
});

app.post("/webhook-test", function (req, res) {
  console.log("Request body from webhooks", JSON.stringify(req.body));
  res.send("sucess");
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
