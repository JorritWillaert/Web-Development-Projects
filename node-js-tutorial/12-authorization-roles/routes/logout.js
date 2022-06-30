const express = require('express');
const router = express.Router();
const logoutTokenController = require('../controllers/logoutController');

router.get('/', logoutTokenController.handleLogout);

module.exports = router;