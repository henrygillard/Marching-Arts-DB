const express = require('express');
const router = express.Router();
const groupCtrl = require('../../controllers/api/group');
const passport = require('passport');
// POST /api/group
router.get('/', groupCtrl.index);
router.get("/:id", groupCtrl.detail);
router.get("/:id/:yId", groupCtrl.yearDetail);
router.post("/", groupCtrl.create);
router.put("/:id", groupCtrl.updateOne);

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