const authService = require("../services/login");

async function login(req, res) {
    try {
        const { email } = req.body; 
        const token = await authService.login(email)
        res.token({ token: token })
    } catch (error) {
        res.status(401).json({message: "invalid"})
    }
}

module.exports = {
    login
}