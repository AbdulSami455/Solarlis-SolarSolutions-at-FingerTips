const express = require("express");
const router = express.Router();
const Plans = require("../models/Plans");

// Making a post request

router.post("/postplans",
async (req, res) => {
    
    try {
        const {Company,Svg,Paragraph,LinkedIn} = req.body;

        const newplans = new Plans({Company: Company, Svg: Svg, Paragraph: Paragraph, LinkedIn: LinkedIn});
        await newplans.save();
        res.status(200).json("plans is registered Successfully");
        console.log(newplans);
        
    } catch (err) {
      res.status(500).json({ errors: err})
    } 
})

// Fetching all the planss 

router.get('/fetchplans', 
async (req, res) => {
    try {
        let response = await Plans.find();
        res.status(200).json(response);
        
    }catch (err) {
        res.status(500).json({ errors: err})
      } 
})

module.exports = router;

