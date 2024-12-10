const User = require("../models/UserSchema");

async function login(req, res) {

        const email = req.body.email

        const candidate = await User.findOne({email : email});

        if (candidate) {
            console.log(candidate)
            return res.status(201).json({candidate : candidate});

        } 
            return res.json({message :"c'est pas bon !"})
  
} 

module.exports = {
    login
}
