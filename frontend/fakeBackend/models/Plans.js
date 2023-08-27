const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const plansschema = new Schema({
    Company:{
        type: String,
    },
    Svg:{
       type: String,
    },
    Paragraph:{
        type: String,
    },
    LinkedIn:{
        type: String,
    }
})

const Plans = mongoose.model('plan',plansschema);
module.exports = Plans;