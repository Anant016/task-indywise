const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

//routes
const users = require("./routes/users");

// middlewares
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

//database
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://anu:anu123@ds247377.mlab.com:47377/prof", {
    useNewUrlParser: true,
  })
  .then(console.log("MongoDbConnected"))
  .catch((err) => console.log(err));

//using routes
app.use("/users", users);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running at port: ${port}`));
