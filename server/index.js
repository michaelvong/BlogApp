const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const authController = require('./controllers/authController');
const app = express();

//connect db
mongoose.connect(process.env.MONGO_URL).then(() => {console.log('Connected to DB')}).catch((err) => {console.log(err)})

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authController)

//make server
app.listen(process.env.PORT, () => console.log('Server is running on port'))