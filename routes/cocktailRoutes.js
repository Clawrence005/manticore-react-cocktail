var cocktailRouter = require('express').Router();
let Cocktail = require('../models/cocktail.model');
let User = require('../models/user.model');

//desc: GET all cocktails
//route: /api/cocktails/
//access: public
cocktailRouter.route('/').get(function (req, res) {
  Cocktail.find()
    .sort({ createdAt: -1 })
    .then((cocktails) => {
      res.status(200).send(cocktails)
    }).catch((err) => {
      res.status(500).send(err);
    })
});

//create
//desc: POST new cocktail
//route: /api/cocktails/
//access: public

//db.categories.findOne( { _id: "MongoDB" } ).parent

// Event.find()
// .populate({
//   path: 'creator',
//   populate: { path: 'createdevents' }
// });

cocktailRouter.post("/", function (req, res) {
  // finds the ref and puts in user id as 'creatorName'
  Cocktail.find()
    .populate({
      //from user Schema
      path: 'userName',
      // to cocktail schema
      populate: { path: 'creatorName' }
    });
  let cocktail = new Cocktail({
    cocktailName: req.body.cocktailName,
    creatorName: req.body.creatorName,
    cocktailImage: req.body.cocktailImage,
    // ingredients: [Schema.Types.Mixed],
    ingredients: req.body.ingredients,
    method: req.body.method,
    garnish: req.body.garnish,
    glass: req.body.glass,
  });
  cocktail.save(function (err, cocktails) {
    if (err) {
      console.log(err)
    }
    else {
      res.status(200).json(cocktail)
    }
  })
});

//update user

//delete

module.exports = cocktailRouter;