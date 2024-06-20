const express = require ("express");
const app = express();
const cors = require('cors')
require("dotenv").config();
const Chart = require('./models/chartModel');
 app.use(cors());


app.use("/",async (req,res) => {
    try {
        const charts = await Chart.find({});
        return res.status(200).send(charts)
    } catch (error) {
        return res.status(400).send(error);
    }
})

app.listen (4000,()=>{
    console.log("server is running at 4000");
})
module.exports = app;