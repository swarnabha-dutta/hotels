require("dotenv").config();
const express = require("express");
const app = express();
const db = require('./db.js');
const Person = require("./models/person.model.js");
const Menu = require("./models/menu.model.js");
const bodyParser = require("body-parser");
const personRoutes = require("./routes/person.routes.js");
const menuRoutes = require("./routes/menu.routes.js");


app.use(bodyParser.json());
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);




app.get("/", (req, res) => {
    res.send("Welcome to Our Hotel!!");
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server is running ");
})