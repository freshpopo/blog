// const express = require('express')
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config/key.js';
import { routeUsers } from './routes/routes.js';

const app = express()
const PORT = process.env.PORT || 5001;

// application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// application/json
app.use(bodyParser.json())
app.use(cookieParser());

// router
app.use('/api/users', routeUsers);
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})