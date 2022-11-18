const client = require("./connection");

const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

client.connect();

//register view engine
app.set("view engine", "ejs");

//middleware and static file
app.use(express.static("public"));

app.get("/", (req, res) => {
  //res.sendFile("./Front-End/HomePage/index.html", { root: __dirname });
  res.render("index");
});

app.get("/QueryExecutor", (req, res) => {
  res.render("index");
});

app.get("/customer", (req, res) => {
  client.query(`set search_path to "groupId4_S10_G3"`, (err, result) => {
    if (!err) {
      console.log("Connected to database");
    } else {
      console.log(err);
    }
  });

  client.query(`Select * from customer`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err);
    }
  });

  client.end;
});
