const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0.aghew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

mongoose.connection.on("connected", () => {
    console.log('Connected to MongoDB')
});

mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error ${err}`)
})

module.exports = mongoose; 