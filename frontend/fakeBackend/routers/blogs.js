const express = require("express");
const router = express.Router();
const Blogs = require("../models/Blogs");

router.post("/postblogs",
async (req, res) => {
    
    try {
        const {Company,Svg,Paragraph,LinkedIn} = req.body;

        const newBlog = new Blogs({Company: Company, Svg: Svg, Paragraph: Paragraph, LinkedIn: LinkedIn});
        await newBlog.save();
        res.status(200).json("blogs is registered Successfully");
        
    } catch (err) {
        console.log(err);
      res.status(500).json({ errors: err})
    } 
})

// Fetching all the blogss 

router.get('/fetchblogs', 
async (req, res) => {
    try {
        let response = await Blogs.find();
        res.status(200).json(response);
        
    }catch (err) {plans
        res.status(500).json({ errors: err})
      } 
})

module.exports = router;

