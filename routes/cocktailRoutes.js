var cocktailRouter = require('express').Router();

//read
cocktailRouter.route('/').get((req, res) => {
  res.status(200).send('get all cocktails')
})
//create

//update user

//delete

module.exports = cocktailRouter;