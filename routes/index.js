const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const passport = require('passport');


// Route to the home page, only accessible when authenticated
router.get('/', passport.checkAuthentication, homeController.home);


// Route to complete a review, also requires authentication
router.post('/completeReview', passport.checkAuthentication, homeController.completeReview);


// Include user-related routes from './users'
router.use('/users', require('./users'));


// Include review-related routes from './review'
router.use('/review', require('./review'));


// Include employee-related routes from './employee'
router.use('/employee', require('./employee'));


// Route to display all assigned work and reviews (accessible to admin)
router.get('/allWorkAndReviews', passport.checkAuthentication, passport.restrictAccessPages, homeController.displayAssignedWorkAndReviews);


module.exports = router;
