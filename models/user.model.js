const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    max: 30
  },
  email: {
    type: String,
    required: true,
    max: 120
  },
  bio: {
    type: String,
    required: false,
    max: 325
  },
  userImage: {
    type: String,
    required: true,
    // default: './path to default image',
    max: 325
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema)