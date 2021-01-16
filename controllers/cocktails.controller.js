// var userRouter = require('express').Router();
// let User = require('../models/user.model');

// //desc: GET all users
// //route: /api/users/
// //access: public
// userRouter.route('/').get(function (req, res) {
//   User.find({}, function (err, users) {
//     try {
//       res.status(200).send(users)
//     } catch (err) {
//       console.log(err)
//     }
//   });
// });

// //create
// //desc: POST a new user
// //route: /api/users/
// //access: public
// userRouter.route('/').post(function (req, res) {
//   try {
//     let user = new User({
//       userName: req.body.userName,
//       email: req.body.email,
//       bio: req.body.bio,
//       imageName: req.body.image,
//     })
//     user.save(function (err) {
//       res.send(user);
//     });
//   } catch (err) {
//     return (err);
//   }
// });

// // const newTodoObj = new Todo(req.body);
// // newTodoObj.save(err => {
// //     if (err) return res.status(500).send(err);
// //     return res.status(200).send(newTodoObj);
// // });
// // userRouter.route('/').post(async function (req, res) {
// //   const user = new User({
// //     userName: req.body.userName,
// //     email: req.body.email,
// //     bio: req.body.bio,
// //     userImage: req.body.userImage,
// //   });
// //   user.save(err => {
// //     if (err) return res.status(500).send(err);
// //     return res.status(201).send({ user })
// //   });
// // });
// // userRouter.post('/', function (req, res) {
// //   User.create({
// //     userName: req.body.userName
// //   }, function (err, user) {
// //     if (err)
// //       res.send(err);
// //     User.find(function (err, users) {
// //       if (err)
// //         res.send(err)
// //       res.json(users)
// //     })
// //   })

// // })
// userRouter.post('/', function (req, res, next) {
//   var user = new User({
//     userName: req.body.userName,
//   })
//   user.save(function (err, user) {
//     if (err) { return next(err) }
//     res.json(201, user)
//   })
// })

// // create employee and send back all employees after creation

// //update user

// //delete

// module.exports = userRouter;