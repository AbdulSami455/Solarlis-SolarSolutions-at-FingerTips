const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const blogsSchema = new Schema({
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

const Blogs = mongoose.model('blog',blogsSchema);
module.exports = Blogs;