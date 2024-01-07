const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001;
const config = require('./config/key');

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post('/register', (req, res) => {
//
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})