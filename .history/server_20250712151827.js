const express = require("express");
const app = express();
const db = require('./db.js');

app.get("/", (req, res) => {
    res.send("Hello world")
});


app.listen(3000, () => {
    console.log("server is running ");
})