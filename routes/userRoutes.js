var userRouter = require('express').Router();
let User = require('../models/user.model');




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

//create
//desc: POST new user
//route: /api/users/
//access: public
userRouter.post("/", function (req, res) {
  let user = new User({
    userName: req.body.userName,
    email: req.body.email, userImage: req.body.userImage,
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

//update user

//delete

module.exports = userRouter;