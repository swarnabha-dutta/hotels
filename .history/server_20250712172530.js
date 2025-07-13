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

app.post("/person", (req, res) => {
    const data = req.body;//Assuming  the request body contains the person data
    // Create a New Person document using Mongoose Model 
    const newPerson = new Person(data);

    // Save the new Person to the database 
    newPerson.save(error,person)=>
})
app.listen(3000, () => {
    console.log("server is running ");
})