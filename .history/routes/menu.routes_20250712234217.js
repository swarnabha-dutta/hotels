const express = require("express");
const router = express.Router();





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


