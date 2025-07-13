const mongoose = require("mongoose");

// mongodb URI 
const MONGODB_URI = "mongodb://localhost:27017/hotels"

// set up MongoDB connection 
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const db = mongoose.connection;

// add event listener to see mongodb is added 
db.error("error", (err) => {
    console.log(err);
})

db.on("connected", () => {
    console.log("Connected to MongoDB Server");
})