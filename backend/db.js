const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = `mongodb+srv://devraj:${process.env.db_pass}@cluster0.hrlkdjt.mongodb.net/test`

const connectToMongo = () => {
    mongoose.connect(mongoURI , () => {
        console.log("Connected to mongo successfully");
    })
}

mongoose.set('strictQuery', true);

module.exports = connectToMongo