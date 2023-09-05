const express = require('express');
const router = express.Router();
const passport = require('passport');

const userProfile = require('../controllers/user');


// Route to render the Signin page, restricted for authenticated users
router.get('/Signin', passport.restrictAccess, userProfile.signin);


// Route to render the Signup page, restricted for authenticated users
router.get('/Signup', passport.restrictAccess, userProfile.signup);


// Route to create a new user
router.post('/create', userProfile.createUser);


// Route to create a user session using Passport for authentication
router.post('/create-session', passport.authenticate(
  'local', { failureRedirect: '/users/Signin' }
), userProfile.createSession);


// Route to destroy the user session and log out
router.get('/Signout', userProfile.destroySession);


module.exports = router;
