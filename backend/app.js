const express = require('express');
const loginRoute = require("./routes/loginRoutes");
const signupRoute = require("./routes/signupRoute");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000
app.use(bodyParser.json());

app.use("/user", signupRoute);
app.use("/auth", loginRoute);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`)
})