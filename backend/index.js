const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')

connectToMongo()

const app = require('express')();
const port = 3001

app.use(cors())
app.use(express.json())
// Available Routes

app.use('/api/auth' , require('./routes/auth.js'))
app.use('/api/notes' , require('./routes/notes.js')) 


app.listen(port , () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`);
})