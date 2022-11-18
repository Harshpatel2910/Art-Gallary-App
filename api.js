const client = require('./connection');

const express = require('express');


const app = express();



client.connect();

//register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.sendFile("./Front-End/HomePage/index.html", { root: __dirname });
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

app.get('/query', (req, res) => {
    client.query(`set search_path to "groupId4_S10_G3"`, (err, result) => {

        if (!err) {
            console.log("Connected to database");
        }
        else {
            console.log(err);
        }


    });

    client.query(`Select * from customer`, (err, result) => {

        if (!err) {
            res.send(result.rows);
        }
        else {

            console.log(err);
        }
    })

    client.end;


})

app.get('/customer', (req, res) => {


    client.query(`set search_path to "groupId4_S10_G3"`, (err, result) => {

        if (!err) {
            console.log("Connected to database");
        }
        else {
            console.log(err);
        }


    });

    client.query(`Select * from customer`, (err, result) => {

        if (!err) {
            res.send(result.rows);
        }
        else {

            console.log(err);
        }
    })

    client.end;
})



