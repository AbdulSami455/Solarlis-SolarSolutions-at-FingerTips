const express = require("express");
const router = express.Router();
const Plans = require("../models/Plans");

// Making a post request

router.post("/postplans",
async (req, res) => {
    
    try {
        const {plansCompany,plansSvg,plansParagraph,plansLinkedIn} = req.body;

        const newplans = new Plans({plansCompany: plansCompany, plansSvg: plansSvg, plansParagraph: plansParagraph,plansLinkedIn: plansLinkedIn});
        await newplans.save();
        res.status(200).json("plans is registered Successfully");
        
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

