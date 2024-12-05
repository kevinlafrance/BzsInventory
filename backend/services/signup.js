const User = require("../models/UserSchema");

async function createUser(userData) {
    const {firstname, lastname, email, role} = userData
    const createdUser = new User({
        firstname, 
        lastname,
        email,
        role

    })

    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createUser }; 
