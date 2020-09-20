
const colors = require('colors');
const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const connectDb = require('./dbConfig')
connectDb();

const app = express();

// app.use()

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.blue.bold))

