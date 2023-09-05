const mongoose = require('mongoose');

// Define the schema for my reviews
const myReviewSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  fromUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  toUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

// Create the MyReview model
const MyReview = mongoose.model('MyReview', myReviewSchema);

module.exports = MyReview;