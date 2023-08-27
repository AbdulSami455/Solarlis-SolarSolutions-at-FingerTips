const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.post("/postproducts",
async (req, res) => {
    
    try {
        const {Company,Svg,Paragraph,LinkedIn} = req.body;

        const newproducts = new Products({Company: Company, Svg: Svg, Paragraph: Paragraph, LinkedIn: LinkedIn});
        await newproducts.save();
        res.status(200).json("products is registered Successfully");
        
    } catch (err) {
        console.log(err);
      res.status(500).json({ errors: err})
    } 
})

// Fetching all the productss 

router.get('/fetchproducts', 
async (req, res) => {
    try {
        let response = await Products.find();
        res.status(200).json(response);
        
    }catch (err) {
        res.status(500).json({ errors: err})
      } 
})

module.exports = router;

