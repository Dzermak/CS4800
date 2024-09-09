const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/firstuser');

const cors = require('cors');

app.use(cors());

mongoose.connect("mongodb+srv://makdzer:pleasework@firstweb.rj7jx.mongodb.net/esentia?retryWrites=true&w=majority&appName=FirstWeb")

app.get("/getUsers", async (req, res) =>{
        try {
            const data = await UserModel.find();
            console.log('Data fetched from MongoDB:', data); // Log the data
            res.json(data);
        } catch (err) {
            console.error('Error fetching data:', err); // Log errors
            res.status(500).send(err.message);
        }
    })

app.listen(3001,  () => {
    console.log("Server runs");
})