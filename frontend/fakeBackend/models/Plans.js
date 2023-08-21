const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const plansschema = new Schema({
    plansCompany:{
        type: String,
    },
    plansSvg:{
       type: String,
    },
    plansParagraph:{
        type: String,
    },
    plansLinkedIn:{
        type: String,
    }
})

const Plans = mongoose.model('plan',plansschema);
module.exports = Plans;