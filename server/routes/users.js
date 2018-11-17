const express = require('express');
const router = express.Router();
const logger = require('../logger');
const userCtrl = require('../controllers/userController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    logger.info('Dealing with users related stuff');
    next()
})

router.get('/', userCtrl.getUsers)

router.get('/:userId', userCtrl.getUserById)

module.exports = router
