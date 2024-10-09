const mongoose = require('mongoose');

const MailingListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  preferences: {
    type: String,
  },
});

module.exports = mongoose.model('MailingList', MailingListSchema);
