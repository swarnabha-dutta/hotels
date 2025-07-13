const express = require("express");
const router = express.Router();
const Menu = require("../models/menu.model.js");



// save the data 
router.post("/menuItems", async (req, res) => {
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



// Show the data
router.get("/menuItems", async (req, res) => {
    try {
        const getMenuData = await Menu.find();
        console.log(getMenuData);
        res.status(200).json(getMenuData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});
//my home task
router.get("/:tasteType", async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == "Sweet" || tasteType == "Spicy" || tasteType == "Sour") {
            const tasteResposne = await Menu.find({ taste: tasteType });
            console.log("taste Response saved");
            res.status(200).json(tasteResposne);
        } else {
            res.status(400).json({ error: error.message });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: error.message });
    }
});




router.put("/:id", async (req, res) => {
    try
    
})

module.exports = router;