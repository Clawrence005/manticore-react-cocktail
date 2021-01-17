const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.gront.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,
      //to be able to update CRUD
      useFindAndModify: false
    });
    console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline.bold)

  } catch (error) {
    console.log(`Error: ${error.message}`.red);

    process.exit(1);
  }
};

// console.log(MONGO_URI);
module.exports = connectDB;