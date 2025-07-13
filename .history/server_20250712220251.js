const express = require("express");
const app = express();
const db = require('./db.js');
const Person = require("./models/person.model.js");
const Menu = require("./models/menu.model.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world")
});





// post route to add a person
app.post("/person", async (req, res) => {
    try {
        const data = req.body;//Assuming  the request body contains the person data
        // Create a New Person document using Mongoose Model 
        const newPerson = new Person(data);

        // Save the new Person to the database 
        const response = await newPerson.save();
        console.log("data saved : ", response);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


// get method to get the person 
app.get("/person", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data Fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

app.get("/person/:work", async (req, res) => {
    tryca
})



app.post("/menuItems", async (req, res) => {
    try {
        const menuData = req.body;
        const savedMenuData = new Menu(menuData);
        const saveNewMenu = await savedMenuData.save();
        console.log("data saved Menu:");
        res.status(200).json(saveNewMenu);
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: error.message });
    }
});

app.get("/menuItems", async (req, res) => {
    try {
        const getMenuData = await Menu.find();
        console.log(getMenuData);
        res.status(200).json(getMenuData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});


app.listen(3000, () => {
    console.log("server is running ");
})