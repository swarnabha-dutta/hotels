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







app.listen(3000, () => {
    console.log("server is running ");
})