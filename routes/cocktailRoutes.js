var cocktailRouter = require('express').Router();
let Cocktail = require('../models/cocktail.model');
let User = require('../models/user.model');

//desc: GET all cocktails
//route: /api/cocktails/
//access: public
cocktailRouter.route('/').get(function (req, res) {
  Cocktail.
    find({})
    // .populate('creatorName', ['userName'])
    .populate('creatorName', ['userName'])
    .sort({ createdAt: -1 })
    .then((cocktails) => {
      res.status(200).send(cocktails)
    }).catch((err) => {
      res.status(500).send(err);
    })
});

// get one
// desc: GET one by id
// route: /api/cocktails/ 
// access: public
cocktailRouter.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Cocktail.findById(id, function (err, data) {
    if (!data) {
      res.status(400).json({
        message: 'no cocktail found with that id'
      })
    } else if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).json(data)
    }
  })
});//need to add populate also ad ref back in in model

// create
// desc: POST new cocktail
// route: /api/cocktails/
// access: public

cocktailRouter.post("/", function (req, res) {
  let cocktail = new Cocktail({
    cocktailName: req.body.cocktailName,
    creatorName: req.body.creatorName,
    cocktailImage: req.body.cocktailImage,
    ingredients: req.body.ingredients,
    method: req.body.method,
    garnish: req.body.garnish,
    glass: req.body.glass,
  });
  console.log(cocktail)
  cocktail.save(function (err, cocktail) {
    if (err) {
      console.log(err)
    }
    else {
      res.status(200).json(cocktail),
        console.log(cocktail)
    }
  })
});

/// update cocktails
// desc: PUT cocktails
// route: /api/cocktails
// access: public
cocktailRouter.put('/:id', function (req, res) {
  let dataToUpdate = {
    cocktailName: req.body.cocktailName,
    creatorName: req.body.creatorName,
    cocktailImage: req.body.cocktailImage,
    ingredients: req.body.ingredients,
    method: req.body.method,
    garnish: req.body.garnish,
    glass: req.body.glass,
  }
  Cocktail.findByIdAndUpdate(req.params.id, { $set: dataToUpdate }, (err, dataToUpdate) => {
    if (err) {
      console.log(err)
    }
    else {
      res.status(200).json(dataToUpdate)
    }
  })
})

//delete cocktail
// desc: DELETE cocktail
// route: /api/cocktails
// access: public
cocktailRouter.delete('/:id', function (req, res) {
  Cocktail.findByIdAndDelete(req.params.id, function (err, id) {
    if (err) {
      res.status(400).send(err)
    } res.json(id)
  })
})

// // get all posts from one User
//desc: GET all posts(cocktails) from one USER
//route: /api/cocktails/author/:userId
//access: public
cocktailRouter.route('/author/:id').get(function (req, res) {
  let id = req.params.id;
  Cocktail
    .find({ 'creatorName': id })
    .sort({ createdAt: -1 })
    .exec(function (err, posts) {
      if (err) {
        return res.status(400).send(err)
      }
      else if (posts.length === 0) {
        // console.log(`posts.length ${posts.length}`),
        return res.status(200).json({ message: 'no posts found related to id' })
      } else (posts.length > 0)
      return res.status(200).json(posts),
        console.log(posts)
    });
});

// Story.
//   find({ author: author._id }).
//   exec(function (err, stories) {
//     if (err) return handleError(err);
//     console.log('The stories are an array: ', posts);
//   });
module.exports = cocktailRouter;