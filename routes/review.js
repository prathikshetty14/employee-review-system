const express = require('express');
const router = express.Router();
const passport = require('passport');

const reviewController = require('../controllers/review');


// Route to the 'assignWork' page, restricted for specific access
router.get('/assignWork', passport.restrictAccessPages, reviewController.home);


// Route to create a review
router.post('/createReview', reviewController.createReview);


module.exports = router;
