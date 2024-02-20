const express = require('express') 
const app = express()

require("dotenv").config()
const mongoose = require('mongoose')
const cors = require('cors')
const UserRouter = require("./routes/User")
const MovieRouter = require("./routes/Movie")

app.use(cors())
app.use(express.json())

app.use('/user', UserRouter);
app.use('/movies', MovieRouter);

async function connectMongoDB() {
    console.log("process.env.MongoURI: ", process.env.MongoURI);
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
connectMongoDB()

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/ping', (req, res) => res.send('Ping - Pong'))


app.listen(port, () => {
    console.log(`This app is running on port ${port}`)
})
