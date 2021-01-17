
const colors = require('colors');
const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const connectDb = require('./dbConfig')
connectDb();

let Cocktail = require('./models/cocktail.model');
let User = require('./models/user.model');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.json());

const userRouter = require('./routes/userRoutes');
const cocktailRouter = require('./routes/cocktailRoutes');


app.use('/api/users', userRouter);
app.use('/api/cocktails', cocktailRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.blue.bold))

