const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => res.send('Home Page'))
app.get('/ping', (req, res)=>res.send('Ping - Pong'))
  
app.listen(port, () => {
console.log(`This app is running on port ${port}`)
})