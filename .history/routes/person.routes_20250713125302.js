const Person  = require("../models/person.model.js")

const express = require("express");
const router = express.Router();


// post route to add a person
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data Fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

router.get("/:workType", async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == "Chef" || workType == "Manager" || workType == "Waiter") {
            const response = await Person.find({ work: workType });
            console.log("response fetched");
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: error.message });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: error.message });
    }
})


router.put("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const updateResponse =await  Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        });
        if (!updateResponse) {
            res.status(404).json({ error: "Person Id not Found" });
        }
        res.status(200).json({message:""});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})



router.delete("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const deletePersonData = await Person.findByIdAndDelete(personId);

        if (!deletePersonData) {
            res.status(404).json({ error: "Person ID is not found" });
        }
        console.log("delete Success");
        console.log("Next line");

        res.status(200).json(deletePersonData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
});




module.exports = router;
