require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require('./db.js');
const Person = require("./models/person.model.js");
const Menu = require("./models/menu.model.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const personRoutes = require("./routes/person.routes.js");
const menuRoutes = require("./routes/menu.routes.js");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Middleware apply
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to :${req.originalUrl}`);
    next();
}


app.use(cors());
app.use(bodyParser.json());
app.use(logRequest);
const port = process.env.PORT || 3000;




app.get("/", (req, res) => {
    res.send("Welcome to Our Hotel!!");
});


app.use("/person",  personRoutes);
app.use("/menu", menuRoutes);




connectDB().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Server is running on port ${port}`);
    }); 
});