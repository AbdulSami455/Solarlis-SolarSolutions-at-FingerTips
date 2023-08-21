const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.post("/postproducts",
async (req, res) => {
    
    try {
        const {productsCompany,productsSvg,productsParagraph,productsLinkedIn} = req.body;

        const newproducts = new Products({productsCompany: productsCompany, productsSvg: productsSvg, productsParagraph: productsParagraph, productsLinkedIn: productsLinkedIn});
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

