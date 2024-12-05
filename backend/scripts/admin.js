const User = require("../models/UserSchema"); 

async function createAdminAccount() {
    try {
       const existingAdmin =  await User.findOne({email: "admin@test.com" })
       if (!existingAdmin) {
        new User({
            email,
            role : "admin"

        })
       }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createAdminAccount;