var userRouter = require('express').Router();
let User = require('../models/user.model');
const cocktailRouter = require('./cocktailRoutes');

//desc: GET all users
//route: /api/users/
//access: public
userRouter.route('/').get(function (req, res) {
  User.find()
    .sort({ createdAt: -1 })
    .then((users) => {
      res.status(200).send(users);
    }).catch((err) => {

      res.status(500).send(err);
    })
});

// get one
// desc: GET one by id
// route: /api/users/
//access: public
userRouter.route('/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, data) {

    if (!data) {
      res.status(400).json({
        message: 'no user found with that id'
      })
    } else if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).json(data)
    }
  })
});

//create
//desc: POST new user
//route: /api/users/
//access: public
userRouter.post("/", function (req, res) {
  let user = new User({
    userName: req.body.userName,
    email: req.body.email,
    userImage: req.body.userImage,
    bio: req.body.bio,
  });
  user.save(function (err, users) {
    if (err) {
      console.log(err);
    }
    else {
      res.status(200).json(users)
    }
  })
});

// update user
// desc: PUT user
// route: /api/users
// access: public
userRouter.put('/:id', function (req, res) {
  let dataToUpdate = {
    userName: req.body.userName,
    email: req.body.email,
    bio: req.body.bio,
    userImage: req.body.userImage
  }
  //find 
  User.findByIdAndUpdate(req.params.id, { $set: dataToUpdate }, (err, dataToUpdate) => {
    if (err, dataToUpdate)
      if (err) {
        res.status(500).send(err)
      } res.status(200).send(dataToUpdate)
  })
})

//delete user
// desc: DELETE user
// route: /api/users
// access: public
userRouter.delete('/:id', function (req, res) {
  User.findByIdAndDelete(req.params.id, function (err, id) {
    if (err) {
      res.status(400).send(err)
    } res.json(id)
  })
})

//specialized routes

//Get all cocktails from user
// desc: GET cocktail
// route: /api/cocktails
// access: public
userRouter.route('/:id/posts').get(function (req, res) {
  User.find({}, function (err, users) {
    if (err) throw err;
    users.forEach(function (user) {
      const a = user.post;
      a.forEach(us => allPosts.push(us));
      console.log(us)
    })
  })
    .sort({ createdAt: -1 })
    .then((users) => {
      res.status(200).send(users);
    }).catch((err) => {

      res.status(500).send(err);
    })
});

const allPosts = [];

// Author.find({}, function(err, users) {
//     if (err) throw err;

//     users.forEach(function(user) {
//         const a = user.posts;
//         a.forEach(us => allPosts.push(us));
//     });
// });
module.exports = userRouter;