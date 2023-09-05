const mongoose = require('mongoose');

// Define the schema for assigned reviews
const assignedReviewSchema = new mongoose.Schema({
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

// Create the AssignedReview model
const AssignedReview = mongoose.model('AssignedReview', assignedReviewSchema);

module.exports = AssignedReview;