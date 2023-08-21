const express = require('express');
const connectdb = require('./db');
const cors = require('cors');

connectdb();

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/Plans",require("./routers/plans"));

app.use("/api/Products",require("./routers/products"));

app.use("/api/Blogs",require("./routers/blogs"));

app.listen(5000, ()=>{
    console.log("Connected to port 5000");
})