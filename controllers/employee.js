const User = require('../models/user');
const AssignedReview = require('../models/assignedReview');
const MyReview = require('../models/myReviews');


// Render the home page with a list of all users
module.exports.home = async function (req, res) {
  try {
    const users = await User.find({});
    res.render('./employeeSection', {
      users: users,
    });
  } catch (error) {
    console.error('Error in home:', error);
  }
};


// Render the admin page with all reviews
module.exports.adminPage = async function(req, res) {
  try {
    // Fetch all users from the database
    const users = await User.find({});

    // Fetch all My Reviews for all users
    const myReviews = await MyReview.find({})
    .populate('fromUser')
    .populate('toUser');

    res.render('./adminview', {
      users: users,
      myReviews: myReviews,
    });
  } catch (error) {
    console.log('Error in adminPage: ', error);
  }
};


// Update a review in the admin page
module.exports.updateReview = async function (req, res) {
  try {
      const reviewId = req.params.id;

      const myReview = await MyReview.findById(reviewId);

      if (!myReview) {
          req.flash('error', 'Review not found');
          return res.redirect('back');
      }

      myReview.message = req.body.message;

      await myReview.save();

      req.flash('success', 'Review updated successfully');
      return res.redirect('back');
  } catch (error) {
      console.error('Error in updateReview:', error);
  }
};


// Delete a review in the admin page
module.exports.deleteReview = async function(req,res){
  try {
    const myReview = await MyReview.findById(req.params.id);

    if(!myReview){
      req.flash('error', 'Review not found');
      return res.redirect('back');
    }

    await myReview.deleteOne({ _id: req.params.id });

    req.flash('error', 'Review deleted!')

    return res.redirect('back')
  } catch (error) {
    console.log('Error in deleteReview ', error);
  }
}


// Update user information
module.exports.update = async function (req, res) {
  try {
    const userId = req.params.id;
    const updatedUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    const user = await User.findById(userId);

    // Check if user data has changed
    if (
      user.name === updatedUser.name &&
      user.email === updatedUser.email &&
      user.password === updatedUser.password
    ) {
      req.flash('success', 'No values were updated');
      return res.redirect('back');
    }

    // Update user data
    user.name = updatedUser.name;
    user.email = updatedUser.email;
    user.password = updatedUser.password;

    user.save();
    req.flash('success', 'User updated successfully');
    return res.redirect('back');
  } catch (error) {
    console.error('Error in update:', error);
    return res.redirect('back');
  }
};


// Delete a user and associated data
module.exports.delete = async function (req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    // Delete user
    user.deleteOne();

    // Delete assigned reviews for the user
    await AssignedReview.deleteMany({ fromUser: userId });

    // Find my review IDs associated with the user
    const myReviewIDs = await MyReview.find({ fromUser: userId });

    // Remove references to my reviews from other users
    for (const review of myReviewIDs) {
      const toUserId = review.toUser;
      await User.findByIdAndUpdate(toUserId, { $pull: { myReviews: review.id } });
      await review.deleteOne();
    }

    res.redirect('back');
  } catch (error) {
    console.error('Error in delete:', error);
  }
};


// Promote a user to admin
const promoteToAdmin = async function (userId) {
  const user = await User.findById(userId);
  user.permission = 'admin';
  user.save();
};


// Demote a user from admin to employee
const demoteToEmployee = async function (userId) {
  const user = await User.findById(userId);
  user.permission = 'employee';
  user.save();
};


// Make a user an admin
module.exports.makeadmin = async function (req, res) {
  try {
    const userId = req.params.id;
    await promoteToAdmin(userId);
    req.flash('success', 'User promoted to Admin');
    return res.redirect('back');
  } catch (error) {
    console.error('Error in makeadmin:', error);
    return res.redirect('back');
  }
};


// Remove admin privileges from a user
module.exports.removeadmin = async function (req, res) {
  try {
    const userId = req.params.id;
    await demoteToEmployee(userId);
    req.flash('success', 'User removed as Admin');
    return res.redirect('back');
  } catch (error) {
    console.error('Error in removeadmin:', error);
    return res.redirect('back');
  }
};
