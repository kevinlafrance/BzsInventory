const express = require("express");
const app = express();

app.listen(3000, () => console.log("Server is running"));

require("dotenv").config(); 


const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.get('/', (req, res) => {
    Engine.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        }
        console.log(err);
        res.send("Some error occured!")
    }).catch(err => console.log("Error occured, " + err));
});
