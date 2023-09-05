const mongoose = require('mongoose');

// Define the schema for users
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  permission: {
    type: String,
  },
  assignedReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AssignedReview',
    },
  ],
  myReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MyReview',
    },
  ],
}, {
  timestamps: true,
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;