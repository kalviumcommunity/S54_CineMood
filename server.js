const express = require('express')
const app = express()

require("dotenv").config()
const mongoose = require('mongoose')

async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MongoURI)
        console.log("🚀Connected to MongoDB")
        return true
    }
    catch {
        (err => {
            console.log("Connection to MongoDB Failed")
            return false
        })
    }
}

const port = 3000

app.get('/', (req, res) => {
    connectMongoDB().then(result => {
        res.send(`Mongo Connected ,${result}`)
    }).catch(err => {
        res.send(`Mongo not Connected ,${err}`)
    })
})
app.get('/ping', (req, res) => res.send('Ping - Pong'))


app.listen(port, () => {
    console.log(`This app is running on port ${port}`)
})
