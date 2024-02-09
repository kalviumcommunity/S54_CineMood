const express = require('express')
const app = express()

require("dotenv").config()
const mongoose = require('mongoose')

app.use('/api', require('./routes/User'));

async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MongoURI)
        console.log("🚀Connected to MongoDB")
    }
    catch {
        (err => {
            console.log("Connection to MongoDB Failed")
        })
    }
}

const port = 3000

app.get('/', (req, res) => {
    connectMongoDB()
    res.send("Welcome to home page")
})
app.get('/ping', (req, res) => res.send('Ping - Pong'))


app.listen(port, () => {
    console.log(`This app is running on port ${port}`)
})
