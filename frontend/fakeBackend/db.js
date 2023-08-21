const mongoose = require('mongoose');

const connectdb = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/fakeDBSolar?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5")
    .then(()=>{
        console.log("Connected to MongoDB");
    })
}

module.exports = connectdb