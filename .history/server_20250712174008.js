const express = require("express");
const app = express();
const db = require('./db.js');
const Person = require("./models/person.model.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world")
});



// post route to add a person

app.post("/person", async(req, res) => {
    
})
app.listen(3000, () => {
    console.log("server is running ");
})