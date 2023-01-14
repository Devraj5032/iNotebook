const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://devraj:3008200210@cluster0.hrlkdjt.mongodb.net/test"

const connectToMongo = () => {
    mongoose.connect(mongoURI , () => {
        console.log("Connected to mongo successfully");
    })
}

mongoose.set('strictQuery', true);

module.exports = connectToMongo