const User = require('../models/user');
const AssignedReview = require('../models/assignedReview');
const MyReview = require('../models/myReviews');



// Render the home page with user information and populated reviews
module.exports.home = async function (req, res) {
  try {

    const user = await User.findById(req.user.id)
      .populate({
        path: 'assignedReviews',
        populate: {
          path: 'toUser',
        },
      })
      .populate({
        path: 'myReviews',
        populate: {
          path: 'fromUser',
        },
      });

    res.render('./home', {
      user: user,
    });
  } catch (error) {
    console.error('Error in home:', error);
  }
};



// Complete a review and update user data
module.exports.completeReview = async function (req, res) {
  try {
    // Find the assigned review based on user and recipient
    let review = await AssignedReview.findOne({
      fromUser: req.user,
      toUser: req.body.toUser,
    });

    // Remove the assigned review from the user's assignedReviews list
    await User.findByIdAndUpdate(req.user, {
      $pull: { assignedReviews: review.id },
    });

    // Delete the assigned review
    await AssignedReview.findByIdAndDelete(review.id);

    // Create a new review in MyReview collection
    review = await MyReview.create({
      fromUser: req.user,
      toUser: req.body.toUser,
      message: req.body.message,
    });

    // Find the recipient user and add the new review to their myReviews list
    let user = await User.findById(req.body.toUser);
    user.myReviews.push(review);
    user.save();

    // Redirect with a success message
    req.flash('success', 'Review Submitted Successfully');
    return res.redirect('back');
  } catch (error) {
    console.error('Error in completeReview:', error);
  }
};



// Displaying all the assigned work and reviews
module.exports.displayAssignedWorkAndReviews = async function (req, res) {
  try {
    // Fetch all users with assignedReviews and myReviews populated
    const users = await User.find({})
      .populate('assignedReviews')
      .populate('myReviews');

    // Render a view with the fetched data
    res.render('adminview', {
      users: users,
      user: req.user,
    });
  } catch (error) {
    console.error('Error in displaying assigned work and reviews:', error);
    // Handle errors or render an error view
    res.render('error', { error: 'An error occurred' });
  }
};
