const User = require('../models/user');


// Render the Signin Page
module.exports.signin = function (req, res) {
  res.render('./signinPage');
}


// Render the SignUp Page
module.exports.signup = function (req, res) {
  res.render('./signupPage');
}


// Create a new user
module.exports.createUser = async function (req, res) {
  try {
    // Check if passwords match
    if (req.body.password !== req.body.confirm_password) {
      req.flash('error', 'Passwords do not match');
      return res.redirect('back');
    }

    // Check if the user already exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      await User.create(req.body);
      req.flash('success', 'User created successfully');
      return res.redirect('signin');
    } else {
      req.flash('error', 'User already exists, try signing in');
      return res.redirect('back');
    }
  } catch (error) {
    console.log('Error', error);
    return res.redirect('back');
  }
}


// Create a session for the user upon signing in
module.exports.createSession = function (req, res) {
  return res.redirect('/');
}


// Destroy the user's session upon signing out
module.exports.destroySession = function (req, res) {
  req.logout(function (error) {
    if (error) {
      console.log('Error while signing out');
      return res.redirect('back');
    }
    return res.redirect('/users/Signin');
  });
}
