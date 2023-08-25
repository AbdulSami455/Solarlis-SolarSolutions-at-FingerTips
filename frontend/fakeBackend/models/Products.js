const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const productsSchema = new Schema({
    Company:{
        type: String,
    },
    Svg:{
       type: String,
    },
    Paragraph:{
        type: String,
    },
    LinkedIn : {
        type : String,
    }
})

const Products = mongoose.model('product',productsSchema);
module.exports = Products;