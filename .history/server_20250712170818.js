const express = require("express");
const app = express();
const db = require('./db.js');
const Person = require("./models/person.model.js");
const 

app.get("/", (req, res) => {
    res.send("Hello world")
});


app.listen(3000, () => {
    console.log("server is running ");
})