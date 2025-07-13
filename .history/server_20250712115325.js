const  express = require("express");

const app = express();
app.get("/", (req, res) => {
    res.send("Hello world")
});


app.get("/idli", (req, res) => {
    const customized_idli = {
        name: "rava idli",
        size: "'10cm in diameter",
        is_sambhar: true,
        is_Chutney: false,
    }
    res.send(customized_idli);
});


app.get("/person", (req, res) => {
    res.send("Hello world");
})
app.listen(3000, () => {
    console.log("server is running ");
})