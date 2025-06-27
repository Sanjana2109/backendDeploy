const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Please login')
})

app.get('/ytmusic', (req, res) => {
  res.send('<h1>listening to music</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
