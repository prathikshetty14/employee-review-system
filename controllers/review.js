const User = require('../models/user');
const AssignedReview = require('../models/assignedReview');



// Rendering the assignment work page with a list of all users
module.exports.home = async function (req, res) {
  try {
    const users = await User.find({});
    res.render('./assignwork', {
      users: users,
    });
  } catch (error) {
    console.error('Error in home:', error);
  }
};



// Create a review assignment
module.exports.createReview = async function (req, res) {
  try {
    // Check if a review assignment already exists for the same recipient and reviewer
    let review = await AssignedReview.findOne({
      fromUser: req.body.reviewer,
      toUser: req.body.recipient,
    });

    if (review) {
      req.flash(
        'success',
        'Review Already Assigned for the same Recipient and Reviewer'
      );
      return res.redirect('back');
    }

    // Create a new review assignment
    review = await AssignedReview.create({
      fromUser: req.body.reviewer,
      toUser: req.body.recipient,
    });

    // Find the reviewer user and add the review assignment to their assignedReviews array
    let user = await User.findById(req.body.reviewer);
    user.assignedReviews.push(review);
    user.save();

    req.flash('success', 'Review Assigned Successfully');
    return res.redirect('back');
  } catch (error) {
    console.error('Error in createReview:', error);
  }
};