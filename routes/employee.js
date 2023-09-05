const express = require('express');
const router = express.Router();
const passport = require('passport');

const employeeController = require('../controllers/employee');


// Route to the employee home page, restricted for specific access
router.get('/home', passport.restrictAccessPages, employeeController.home);


// Route to get the admin home page
router.get('/adminpage', passport.restrictAccessPages, employeeController.adminPage);


// Route to update a review
router.post('/updateReview/:id', passport.checkAuthentication, employeeController.updateReview);


// Route to delete a review
router.get('/deleteReview/:id', passport.checkAuthentication, employeeController.deleteReview);


// Route to update user information, requires authentication
router.post('/update/:id', passport.checkAuthentication, employeeController.update);


// Route to delete a user, requires authentication
router.get('/delete/:id', passport.checkAuthentication, employeeController.delete);


// Route to make a user an admin
router.get('/makeadmin/:id', employeeController.makeadmin);


// Route to remove admin privileges from a user
router.get('/removeadmin/:id', employeeController.removeadmin);


module.exports = router;
