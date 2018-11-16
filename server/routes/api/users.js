const express = require('express');
const router = express.Router();
const logger = require('../../logger');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    logger.info('Dealing with users related stuff');
    next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send({message: 'Msg from USERS api'})
})
// define the about route
router.get('/:userId', function (req, res) {
  res.send('User with id %s', req.params.userId)
})

module.exports = router
