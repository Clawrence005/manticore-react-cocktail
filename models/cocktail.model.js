const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CocktailSchema = new Schema({
  cocktailName: {
    type: String,
    required: true,
    max: 60
  },
  // creatorName: {
  //   type: String,
  //   required: true,
  //   max: 120,
  //   required: true
  // },
  creatorName: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cocktailImage: {
    type: String,
    required: true,
    // default: './ path to default image'
    max: 325
  },
  ingredients: [Schema.Types.Mixed],
  method: {
    type: String,
    required: true,
    max: 325
  },
  garnish: {
    type: String,
    required: true,
    max: 60
  },
  glass: {
    type: String,
    // enum: ['rocks', 'collins', 'snifter', 'flute', 'pint glass', 'wine glass'],
    required: true,
    max: 60,
    default: 'rocks'
  }
}, { timestamps: true });

module.exports = mongoose.model('Cocktail', CocktailSchema)