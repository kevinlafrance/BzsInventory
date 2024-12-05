const User = require("../models/UserSchema");


async function login(email) {
    try {
        const isExistingUser = await User.findOne({ email });
        if (!isExistingUser) {
            throw new Error("User not found");
            
        }
    } catch (error) {
        console.log("login error:", error.message);
        throw new Error("Email invalid")
    }
}

module.exports = {
    login
}