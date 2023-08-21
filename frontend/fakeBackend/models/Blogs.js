const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const blogsSchema = new Schema({
    blogsCompany:{
        type: String,
    },
    blogsSvg:{
       type: String,
    },
    blogsParagraph:{
        type: String,
    },
    blogsLinkedIn : {
        type : String,
    }
})

const Blogs = mongoose.model('blog',blogsSchema);
module.exports = Blogs;