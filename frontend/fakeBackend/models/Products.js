const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const productsSchema = new Schema({
    productsCompany:{
        type: String,
    },
    productsSvg:{
       type: String,
    },
    productsParagraph:{
        type: String,
    },
    productsLinkedIn : {
        type : String,
    }
})

const Products = mongoose.model('product',productsSchema);
module.exports = Products;