const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', UserController.users_create_user);

router.post("/login", UserController.users_login);

router.delete('/:userId', checkAuth, UserController.users_delete);

router.get('/', UserController.users_get_all);

module.exports = router;
