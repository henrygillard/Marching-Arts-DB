const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require("../../config/ensureLoggedIn");
const passport = require('passport');

// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

 // Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/groups',
      failureRedirect : '/groups'
    }
  )); 
module.exports = router;