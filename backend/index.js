const express = require('express')
const connectToMongo = require('./db')

connectToMongo()

const app = require('express')();
const port = 5000

app.use(express.json())
// Available Routes

app.use('/api/auth' , require('./routes/auth.js'))
app.use('/api/notes' , require('./routes/notes.js')) 


app.listen(port , () => {
    console.log(`Example app listening at http://localhost:${port}`);
})