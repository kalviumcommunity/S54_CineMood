const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()

require("dotenv").config()
const mongoose = require('mongoose')
const cors = require('cors')
const UserRouter = require("./routes/User")
const MovieRouter = require("./routes/Movie")
const LoginRouter = require("./routes/Login")
const {UserDataHandler} = require("./handlers/UserDataHandler")

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

app.use(express.json())
app.use(cookieParser());

app.use('/user', UserRouter);
app.use('/movies', MovieRouter);
app.use('/login', LoginRouter);
app.post('/userData', UserDataHandler)

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
connectMongoDB()

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/ping', (req, res) => res.send('Ping - Pong'))


app.listen(port, () => {
    console.log(`This app is running on port ${port}`)
})
