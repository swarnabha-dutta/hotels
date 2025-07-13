const express = require("express");
const app = express();
const db = require('./db.js');
const Person = require("./models/person.model.js");
const Menu = require("./models/menu.model.js");
const bodyParser = require("body-parser");
const peronRoutes = require("./routes/person.routes.js");



app.use(bodyParser.json());
app.use("/person", peronRoutes);
app.get("/", (req, res) => {
    res.send("Hello world")
});








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