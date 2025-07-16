require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require('./db.js');
const Menu = require("./models/menu.model.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const personRoutes = require("./routes/person.routes.js");
const menuRoutes = require("./routes/menu.routes.js");
const passport = require('./middleware/auth.middleware.js');

// Middleware apply
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to :${req.originalUrl}`);
    next();
}


app.use(cors());
app.use(bodyParser.json());
app.use(logRequest);


app.use(passport.initialize());
const port = process.env.PORT || 3000;



const localAuthenticate = passport.authenticate('local', { session: false });
app.get("/", localAuthenticate, (req, res) => {//localAuthenticate middleware is applied
    res.send("Welcome to Our Hotel!!");
});


app.use("/person", localAuthenticate, personRoutes);//localAuthenticate middleware is applied
app.use("/menu", menuRoutes);//localAuthenticate middleware is not applied




connectDB().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Server is running on port ${port}`);
    }); 
});